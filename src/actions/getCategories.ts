import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

export const getCategories = async (): Promise<Category[]> => {
  const res = await fetch(URL);
  if (!res) {
    return [];
  }

  return res.json();
};
