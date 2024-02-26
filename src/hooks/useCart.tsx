import { Product } from "@/types";
import toast from "react-hot-toast";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface CartStore {
  products: Product[];
  addItem: (data: Product) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
}
const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      products: [],
      addItem: (data: Product) => {
        const currentProducts = get().products;
        const existingProduct = currentProducts.find(
          product => product.id === product.id
        );

        if (existingProduct) {
          return toast.error("Item already in cart");
        }
        set({ products: [...get().products, data] });
        toast.success("Item added to cart.");
      },
      removeItem: (id: string) => {
        set({
          products: [...get().products.filter(product => product.id !== id)],
        });
        toast.success("Item removed from the cart");
      },
      removeAll: () => set({ products: [] }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
export default useCart;
