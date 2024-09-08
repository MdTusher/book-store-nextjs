"use client";

import links from "../constants/data";
import Link from "next/link";
import { useStoreContext } from "../context";

const NavLinks = () => {
  const { cartData } = useStoreContext();
  return (
    <ul>
      {links.map((link) => {
        const IconComponent = link.icon;
        return (
          <li className="px-4 py-3 hover:shadow-lg" key={link.id}>
            <Link className="flex gap-2 max-sm:justify-center" href={link.href}>
              <IconComponent className="h-6 w-6" />
              {link.name === "Cart" && cartData && cartData.length > 0 ? (
                <span className="text-red-700">
                  {link.name} {cartData.length}
                </span>
              ) : (
                <p className="max-sm:hidden">{link.name}</p>
              )}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavLinks;
