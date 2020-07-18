import { BookId, Book } from "./Book.ts";

export const BOOK_REPOSITORY_KEY = Symbol("BookRepository");

export interface BookRepository {
  getAll(): Promise<Book[]>;
  findBookById(bookid: BookId): Promise<Book | undefined>;
}
