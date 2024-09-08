"use client";
import { useRouter } from "next/navigation";
const Payment = () => {
  const router = useRouter();
  const makePayment = () => {
    router.push("/store/track-order");
  };
  return (
    <section className="border py-4  max-w-sm w-full rounded-lg ring-1">
      <h1 className="text-center text-lg pb-4 border-b border-blue-200">
        CheckOut
      </h1>
      <form className="flex flex-col justify-center items-center gap-4 py-4 ">
        <div className="flex flex-col gap-1">
          <label className="text-sm font-light" htmlFor="cardNo">
            Card Number
          </label>
          <input
            className="border rounded-xl px-3 border-blue-400 focus:border-blue-600 outline-none font-light shadow-md shadow-blue-200"
            id="cardNo"
            type="text"
            placeholder="enter card number"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm font-light" htmlFor="cardName">
            Name on the card
          </label>
          <input
            className="border rounded-xl px-3 border-blue-400 focus:border-blue-600 outline-none font-light shadow-md shadow-blue-200"
            id="cardName"
            type="text"
            placeholder="enter The Name"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm font-light" htmlFor="cardPin">
            PIN Number
          </label>
          <input
            className="border rounded-xl px-3 border-blue-400 focus:border-blue-600 outline-none font-light shadow-md shadow-blue-200"
            id="cardPin"
            type="password"
            placeholder="enter PIN number"
          />
        </div>
        <button
          className=" mt-1 px-4 py-1.5 bg-teal-300 border-teal-500 border rounded-lg hover:shadow-md text-slate-700 hover:text-slate-900"
          onClick={makePayment}
        >
          Make Payment
        </button>
      </form>
    </section>
  );
};

export default Payment;
