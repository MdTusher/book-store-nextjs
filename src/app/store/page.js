import { getAllBooks } from "../constants/fakedata";
import BookList from "../components/BookList";

const Store = () => {
  const books = getAllBooks();
  return <BookList books={books} />;
};

export default Store;
