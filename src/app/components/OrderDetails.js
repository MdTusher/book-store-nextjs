"use client";
import { useStoreContext } from "../context";
const delevaryCharge = 20;
const OrderDetails = () => {
  const { cartData } = useStoreContext();

  const booksBuy = cartData.filter((book) => {
    return book.type === "buy";
  });

  const priceBuy = booksBuy.reduce(
    (accumulator, book) => accumulator + book.sellPrice,
    0
  );

  const booksRent = cartData.filter((book) => {
    return book.type === "rent";
  });
  const priceRent = booksBuy.reduce(
    (accumulator, book) => accumulator + book.rentPrice,
    0
  );

  return (
    <section className="border max-w-lg w-full px-6 py-4 ring-1 rounded-lg">
      <h2 className="text-lg text-center pb-4 border-b border-blue-200">
        Order Details
      </h2>
      {cartData.length > 0 ? (
        <ul className="space-y-2 text-center py-3">
          <li>
            Buying {booksBuy.length} books for {priceBuy} TK
          </li>
          <li>
            Renting {booksRent.length} books for {priceRent} TK
          </li>
          <li>Delevary Charge {delevaryCharge} Tk</li>

          <li className="font-semibold pt-4 border-t border-blue-200 text-teal-600">
            Total Cost {delevaryCharge + priceBuy + priceRent} Tk
          </li>
        </ul>
      ) : (
        <p className="text-center text-red-600">No book was selected..</p>
      )}
    </section>
  );
};

export default OrderDetails;
