import { Container } from "./imports/YfisrevniJS.ts";
import { SetupClass } from "./infrastructure/setupApp.ts";
import { BookRepositoryMemory } from "./infrastructure/BookRepositoryMemory.ts";
import {
  BookRepository,
  BOOK_REPOSITORY_KEY,
} from "./domain/BookRepository.ts";
import { BookGetter } from "./application/BookGetter.ts";
import { BookLister } from "./application/BookLister.ts";
import { GetBookController } from "./infrastructure/controllers/GetBookController.ts";
import { GetBooksController } from "./infrastructure/controllers/GetBooksController.ts";
import { Controllers } from "./infrastructure/controllers/Controllers.ts";

const myContainer = new Container();
myContainer.bind<BookRepository>(BOOK_REPOSITORY_KEY).to(BookRepositoryMemory);
myContainer.bind(BookGetter).to(BookGetter);
myContainer.bind(BookLister).to(BookLister);
myContainer.bind(GetBookController).to(GetBookController);
myContainer.bind(GetBooksController).to(GetBooksController);
myContainer.bind(Controllers).to(Controllers);
myContainer.bind(SetupClass).to(SetupClass);

const setupClass = myContainer.get<SetupClass>(SetupClass);

await setupClass.listen();
