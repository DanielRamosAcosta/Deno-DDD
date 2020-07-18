import { DomainError } from "./DomainError.ts";
import { BookId } from "./Book.ts";

export class BookNotFound extends DomainError {
  constructor(public readonly bookId: BookId) {
    super(`Could not find book with id ${bookId}`);
  }
}
