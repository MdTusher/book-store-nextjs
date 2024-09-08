import { getBookById } from "@/app/constants/fakedata";
import Image from "next/image";

const BookDetails = ({ params: { id } }) => {
  const singleBook = getBookById(id);

  return (
    <article className="tracking-wide max-md:m-4 max-md:gap-4 flex justify-around items-center w-full max-md:flex-col ">
      <Image
        className=" p-2 border mr-2 rounded-md "
        src={singleBook.cover}
        alt={singleBook.title}
        width={450}
        height={300}
        style={{ height: "500px", width: "auto" }}
        priority={true}
      />
      <div className="p-6 space-y-4 border-2 rounded-lg">
        <div>
          <h1 className="text-2xl ">{singleBook.title}</h1>
          <h3 className="font-thin">By, {singleBook.author}</h3>
        </div>
        <div className="grid grid-cols-2 gap-1.5">
          <p>Genre : {singleBook.genre}</p>
          <p>Total Pages : {singleBook.pages}</p>
          <p>Sell Price : {singleBook.sellPrice} Tk</p>
          <p>Rent Price : {singleBook.rentPrice} Tk</p>
          <p>Total Stock : {singleBook.stock}</p>
          <p>Total Sold : {singleBook.sold}</p>
        </div>
        <p className="max-w-lg font-thin">
          <span className="font-normal"> Description : </span>
          {singleBook.description}
        </p>
      </div>
    </article>
  );
};

export default BookDetails;
