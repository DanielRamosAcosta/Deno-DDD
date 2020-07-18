import { injectable } from "../../imports/YfisrevniJS.ts";
import { GetBookController } from "./GetBookController.ts";
import { GetBooksController } from "./GetBooksController.ts";

@injectable()
export class Controllers {
  public readonly getBookController: GetBookController;
  public readonly getBooksController: GetBooksController;

  constructor(
    getBookController: GetBookController,
    getBooksController: GetBooksController,
  ) {
    this.getBookController = getBookController;
    this.getBooksController = getBooksController;
  }
}
