import { app } from "./app.ts";

app.build().listen({
  hostname: "0.0.0.0",
  port: 8000,
});
