import Link from "next/link";
import bgImg from "../../public/home-bg.jpg";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen flex flex-col justify-center items-center">
      <div className="flex items-center z-20 min-h-2/5 w-2/5 bg-slate-400 bg-opacity-50 rounded-lg shadow-slate-200 shadow ">
        <div className="p-8 flex flex-col items-center justify-center gap-4">
          <h1 className=" text-slate-200 text-xl font-bold ">Book Store</h1>
          <p className="text-sm text-center font-light text-slate-950">
            Welcome to Book Store, your premier destination for purchasing,
            selling, or renting a diverse range of books to suit your needs.{" "}
          </p>
          <Link href="/store" className="hover:shadow-lg py-2 px-3 rounded-lg">
            Join now
          </Link>
        </div>
      </div>
      <Image
        className="blur-sm"
        src={bgImg}
        alt="background image"
        fill
        sizes="100vh"
        style={{ objectfit: "cover" }}
      />
    </main>
  );
}
