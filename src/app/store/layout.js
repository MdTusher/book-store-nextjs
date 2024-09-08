import Sidebar from "../components/Sidebar";
import { StoreProvider } from "../context";
export const metadata = {
  title: "Store",
  description: "An online bookstore to buy, sell, exchange and rent used books",
};

export default function BookStoreLayout({ children }) {
  return (
    <StoreProvider>
      <div className="flex min-h-svh gap-2">
        <Sidebar />
        {children}
      </div>
    </StoreProvider>
  );
}
