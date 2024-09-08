import Link from "next/link";
import NavLinks from "./NavLinks";
import logo from "../../../public/logo.jpg";
import Image from "next/image";
import { ArrowLeftEndOnRectangleIcon } from "@heroicons/react/24/solid";

const Sidebar = () => {
  return (
    <aside className="flex flex-col gap-4 shadow-md min-h-svh ">
      <Link href="/store">
        <Image
          className="w-48 h-18 max-sm:hidden rounded-lg"
          src={logo}
          alt="logo"
          style={{ objectfit: "cover" }}
        />
      </Link>
      <div>
        <NavLinks />
      </div>
      <form className=" font-bold bg-slate-100 p-2 hover:shadow-lg">
        <button className="px-4 flex gap-2 justify-center">
          <ArrowLeftEndOnRectangleIcon className="h-6 w-6" />
          <p className="max-sm:hidden">Sign out? </p>
        </button>
      </form>
    </aside>
  );
};

export default Sidebar;
