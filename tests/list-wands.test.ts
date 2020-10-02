import { expect } from "expect";
import { app } from "../src/api/app.ts";
import { testMy, w } from "./ultratest.ts";

Deno.test({
  name: "returns the details of the wand",
  fn: w(app, async (app) => {
    const { body, status } = await testMy(app).get("/wands/1").json();

    expect(body).toEqual({ length: 25 });
    expect(status).toBe(200);
  }),
});

Deno.test({
  name: "returns the list of wands",
  fn: w(app, async (app) => {
    const { body, status } = await testMy(app).get("/wands").json();

    expect(body).toEqual([]);
    expect(status).toBe(200);
  }),
});

Deno.test({
  name: "creates a customer",
  fn: w(app, async (app) => {
    const { body, status } = await testMy(app)
      .post("/customers", { name: "Peter" })
      .expect("Content-Type", /json/)
      .expect(200)
      .json();

    expect(body).toEqual({ status: "OK" });
    expect(status).toBe(200);
  }),
});
