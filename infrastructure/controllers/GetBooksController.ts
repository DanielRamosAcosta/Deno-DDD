import { injectable } from "../../imports/YfisrevniJS.ts";
import { RouterContext } from "../../imports/oak.ts";
import { BookLister } from "../../application/BookLister.ts";

@injectable()
export class GetBooksController {
  static PATH = "/book";

  private bookLister: BookLister;

  constructor(bookLister: BookLister) {
    this.bookLister = bookLister;
  }

  execute(context: RouterContext) {
    return this.bookLister.execute();
  }
}
