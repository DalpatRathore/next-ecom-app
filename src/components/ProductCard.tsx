"use client";

import { Product } from "@/types";
import Image from "next/image";
import IconButton from "./IconButton";
import { Expand, ShoppingCart } from "lucide-react";
import Currency from "./Currency";

interface ProductCardProps {
  product: Product;
}
const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          fill
          src={product?.images?.[0]?.url}
          alt=""
          className="aspect-square object-cover rounded-md"
        ></Image>
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              onClick={() => {}}
              icon={<Expand size={20} className="text-gray-600"></Expand>}
            ></IconButton>
            <IconButton
              onClick={() => {}}
              icon={
                <ShoppingCart
                  size={20}
                  className="text-gray-600"
                ></ShoppingCart>
              }
            ></IconButton>
          </div>
        </div>
      </div>
      <div className="">
        <p className="font-semi-bold text-lg">{product.name}</p>
        <div className="text-sm text-gray-500">{product.category?.name}</div>
      </div>
      <div className="flex items-center justify-between">
        <Currency value={product?.price}></Currency>
      </div>
    </div>
  );
};
export default ProductCard;
