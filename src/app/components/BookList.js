import BookCard from "./BookCard";

const BookList = ({ books }) => {
  return (
    <div className=" flex-grow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-xl:grid-col-4 gap-6 ">
      {books.map((book) => {
        return <BookCard key={books.id} book={book} />;
      })}
    </div>
  );
};

export default BookList;
