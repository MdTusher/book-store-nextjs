import OrderDetails from "@/app/components/OrderDetails";
import Payment from "@/app/components/Payment";

const Cart = () => {
  return (
    <main className="m-4 container flex flex-col justify-center items-center gap-6">
      <h1 className="text-xl font-semibold tracking-widest text-slate-900">
        Welcome User
      </h1>
      <div className="container flex justify-around items-center max-lg:flex-col max-lg:gap-6">
        <>
          <OrderDetails />
        </>

        <>
          <Payment />
        </>
      </div>
      <p className=" border p-6 text-sm font-light max-w-4xl ring-0">
        Thank you for choosing to shop with us! We’re thrilled that you’ve
        selected book/book from our online store. We kindly ask that you
        complete the checkout process by finalizing the payment at your earliest
        convenience. Your prompt attention to this matter will help us serve you
        better.
        <br />
        We hope you enjoy your new read and find it as engaging and enlightening
        as we believe it will be. If you have any questions or need assistance,
        please don’t hesitate to reach out to our support team. Thank you once
        again for your support. Happy reading!
      </p>
    </main>
  );
};

export default Cart;
