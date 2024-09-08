import {
  HomeIcon,
  BookOpenIcon,
  RectangleStackIcon,
  TruckIcon,
  UserGroupIcon,
  CogIcon,
  Squares2X2Icon,
  CubeTransparentIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/solid";
const links = [
  { id: 1, name: "Home", href: "/", icon: HomeIcon },
  { id: 2, name: "Books", href: "/store", icon: BookOpenIcon },
  {
    id: 3,
    name: "Sell or Lend",
    href: "/store/sell-lend",
    icon: RectangleStackIcon,
  },
  { id: 4, name: "Cart", href: "/store/cart", icon: ShoppingCartIcon },
  { id: 5, name: "Track Order", href: "/store/track-order", icon: TruckIcon },
  { id: 6, name: "Community", href: "/store/community", icon: UserGroupIcon },
  { id: 7, name: "Settings", href: "/store/settings", icon: CogIcon },
  { id: 8, name: "About", href: "/store/about", icon: Squares2X2Icon },
  { id: 9, name: "Admin", href: "/store/admin", icon: CubeTransparentIcon },
];
export default links;
