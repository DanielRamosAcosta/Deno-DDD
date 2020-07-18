import { injectable } from "../imports/YfisrevniJS.ts";
import { BookRepository } from "../domain/BookRepository.ts";
import { Book, BookId } from "../domain/Book.ts";

@injectable()
export class BookRepositoryMemory implements BookRepository {
  private books = [
    new Book("1", "Harry Potter y La Piedra Filosofal", "JK Rowling"),
  ];

  async getAll() {
    return this.books;
  }

  async findBookById(bookId: BookId): Promise<Book | undefined> {
    const book = this.books.find((book) => book.id === bookId);
    return book;
  }
}
