import Image from "next/image";
import Link from "next/link";
import AddToCart from "./AddToCart";
const BookCard = ({ book }) => {
  return (
    <div className="flex justify-center items-center py-8">
      <Link
        className="border-2 p-4 max-w-72 flex flex-col rounded-lg hover:shadow-lg "
        href={`/store/${book.id}`}
      >
        <Image
          className=" p-2 border mr-2 rounded-md "
          src={book.cover}
          alt={book.title}
          width={150}
          height={100}
          style={{ height: "200px", width: "auto" }}
          priority={true}
        />

        <h1 className="text-xl p-2">{book.title}</h1>
        <p className="line-clamp-3 p-2 text-md font-light leading-7">
          {book.description}
        </p>
        <div className="p-2">
          <AddToCart book={book} />
        </div>
      </Link>
    </div>
  );
};

export default BookCard;
