import { injectable } from "../imports/YfisrevniJS.ts";
import { Application, isHttpError } from "../imports/oak.ts";
import { setupRoutes } from "./setupRoutes.ts";
import { Controllers } from "./controllers/Controllers.ts";

@injectable()
export class SetupClass {
  public app: Application;

  constructor(controllers: Controllers) {
    const router = setupRoutes(controllers);

    this.app = new Application();

    this.app.use(async (ctx, next) => {
      try {
        await next();
      } catch (err) {
        if (isHttpError(err)) {
          ctx.response.status = err.status;
          ctx.response.body = {
            message: err.message,
            stack: err.stack,
          };
        } else {
          console.error("Unkown error", err);
          throw err;
        }
      }
    });

    this.app.use(router.routes());
    this.app.use(router.allowedMethods());
  }

  listen() {
    return this.app.listen({ port: 8000 });
  }
}
