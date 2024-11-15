import React from "react";
import { CategoryCard } from "./CategoryCard";

const categories = [
  {
    label: "Style",
    img: "/images/style.png",
    className: "bg-sky-100 hover:bg-sky-200",
  },
  {
    label: "Fashion",
    img: "/images/fashion.png",
    className: "bg-purple-100 hover:bg-purple-200",
  },
  {
    label: "Food",
    img: "/images/food.png",
    className: "bg-green-100 hover:bg-green-200",
  },
  {
    label: "Travel",
    img: "/images/travel.png",
    className: "bg-rose-100 hover:bg-rose-200",
  },
  {
    label: "Culture",
    img: "/images/culture.png",
    className: "bg-orange-100 hover:bg-orange-200",
  },
  {
    label: "Coding",
    img: "/images/coding.png",
    className: "bg-violet-100 hover:bg-violet-200",
  },
];
export default function CategoryList() {
  return (
    <section className="flex flex-col gap-4 mx-auto px-10 mb-10">
      <h1 className="mt-14 text-2xl text-slate-700 font-semibold">Popular Categories</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 md:gap-8 lg:grid-cols-6 gap-5">
        {categories.map((item) => (
          <CategoryCard key={item.label} card={item} />
        ))}
      </div>
    </section>
  );
}
