import { BookType } from "./Book";
import { NewsType } from "./News";

export type ResponseType = {
  news: BookType[];
  book: NewsType[];
};
