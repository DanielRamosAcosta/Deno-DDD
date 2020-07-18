import { injectable, inject } from "../imports/YfisrevniJS.ts";
import {
  BookRepository,
  BOOK_REPOSITORY_KEY,
} from "../domain/BookRepository.ts";
import { Book } from "../domain/Book.ts";

@injectable()
export class BookLister {
  private bookRepository: BookRepository;

  constructor(@inject(BOOK_REPOSITORY_KEY) bookRepository: BookRepository) {
    this.bookRepository = bookRepository;
  }

  async execute(): Promise<Book[]> {
    return await this.bookRepository.getAll();
  }
}
