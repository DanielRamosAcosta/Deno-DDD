import { injectable, inject } from "../imports/YfisrevniJS.ts";
import {
  BookRepository,
  BOOK_REPOSITORY_KEY,
} from "../domain/BookRepository.ts";
import { BookId, Book } from "../domain/Book.ts";
import { BookNotFound } from "../domain/BookNotFound.ts";

@injectable()
export class BookGetter {
  private bookRepository: BookRepository;

  constructor(@inject(BOOK_REPOSITORY_KEY) bookRepository: BookRepository) {
    this.bookRepository = bookRepository;
  }

  async execute(bookId: BookId): Promise<Book> {
    const book = await this.bookRepository.findBookById(bookId);

    if (!book) {
      throw new BookNotFound("Could not find that book");
    }

    return book;
  }
}
