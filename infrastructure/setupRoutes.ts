import { Router, RouterContext } from "../imports/oak.ts";
import { GetBooksController } from "./controllers/GetBooksController.ts";
import { GetBookController } from "./controllers/GetBookController.ts";
import { Controllers } from "./controllers/Controllers.ts";

export function setupRoutes(controllers: Controllers) {
  const router = new Router();

  return router
    .get(GetBookController.PATH, async (context) => {
      const body = await controllers.getBookController.invoke(context);
      context.response.body = body;
    })
    .get(GetBooksController.PATH, async (context: RouterContext) => {
      const body = await controllers.getBooksController.execute(context);
      context.response.body = body;
    });
}
