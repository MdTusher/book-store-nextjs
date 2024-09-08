"use client";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { toast } from "react-toastify";
import { useStoreContext } from "../context";

const AddToCart = ({ book }) => {
  const { cartData, setCartData } = useStoreContext();

  const handleCart = (e, reason) => {
    e.preventDefault();
    const newData = { ...book, type: reason };
    setCartData([...cartData, newData]);

    toast.success(`Added ${book.title} to the cart`, {
      autoClose: 700,
      position: "top-right",
    });
  };
  return (
    <div className="flex justify-around items-center">
      <button
        className="px-3 py-1.5 bg-teal-300 border-teal-500 border rounded-lg hover:shadow-md text-slate-700 hover:text-slate-900"
        onClick={(e) => handleCart(e, "buy")}
      >
        <ShoppingCartIcon className="w-5 mr-0.5 inline" /> to Buy
      </button>
      <button
        className="px-3 py-1.5 bg-teal-300 border-teal-500 border rounded-lg hover:shadow-md text-slate-700 hover:text-slate-900"
        onClick={(e) => handleCart(e, "rent")}
      >
        <ShoppingCartIcon className="w-5 mr-0.5 inline" /> to Rent
      </button>
    </div>
  );
};

export default AddToCart;
