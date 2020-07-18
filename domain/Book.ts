export type BookId = string

export class Book {
    constructor(
        public readonly id: BookId,
        public readonly title: string,
        public readonly author: string,
    ) {}
}
