import { injectable } from "../../imports/YfisrevniJS.ts";
import { RouterContext, Status, createHttpError } from "../../imports/oak.ts";
import { BookGetter } from "../../application/BookGetter.ts";
import { DomainError } from "../../domain/DomainError.ts";
import { BookNotFound } from "../../domain/BookNotFound.ts";

export abstract class Controller {
  protected abstract mapDomainErrorToInfrastructure(
    domainError: DomainError,
  ): Error | undefined;

  protected abstract execute(context: RouterContext): Promise<any>;

  public async invoke(context: RouterContext) {
    let response: any;
    try {
      response = await this.execute(context);
    } catch (error) {
      if (error instanceof DomainError) {
        throw this.mapDomainErrorToInfrastructure(error);
      }
      throw error;
    }
    return response;
  }
}

@injectable()
export class GetBookController extends Controller {
  static PATH = "/book/:id";

  private bookGetter: BookGetter;

  constructor(bookGetter: BookGetter) {
    super();
    this.bookGetter = bookGetter;
  }

  protected mapDomainErrorToInfrastructure(
    domainError: DomainError,
  ): Error | undefined {
    if (domainError instanceof BookNotFound) {
      return createHttpError(Status.NotFound, "Could not found book with id");
    }

    return;
  }

  protected execute(context: RouterContext) {
    const bookId = context.params && context.params.id;

    if (!bookId) {
      throw new Error("BookId required");
    }

    return this.bookGetter.execute(bookId);
  }
}
