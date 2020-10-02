import { expect, it } from "expect";
import { app } from "../src/api/app.ts";

type Response = {
  body: any;
  status: number;
};

class Bar {
  constructor(private responsePromise: Promise<globalThis.Response>) {}

  async json(): Promise<Response> {
    const response = await this.responsePromise;
    const data = await response.json();

    const newLocal = {
      body: data,
      status: response.status,
    };

    return newLocal;
  }
}

class Foo {
  get(path: string): Bar {
    return new Bar(fetch(`http://localhost:3333${path}`));
  }
}

function testMy(app: any) {
  return new Foo();
}

it("greets when called", async () => {
  app.listen({ hostname: "0.0.0.0", port: 3333 });

  try {
    const { body, status } = await testMy(app).get("/wands/1").json();

    expect(body).toEqual({ length: 25 });
    expect(status).toBe(200);
  } catch (error) {
    console.log("error, closing server");
    app.close();
    throw error;
  }
  app.close();
});
