import { BookType } from "./Book";
import { NewsType } from "./News";

export type ResponseType = {
  key: string;
  news: BookType[];
  book: NewsType[];
};
