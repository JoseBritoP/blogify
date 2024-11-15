import React from "react";
import { SimpleCategoryCard } from "../cards/CategoryCard";
/*
card.category === "Style"
      ? "bg-sky-500/60"
      : card.category === "Coding"
      ? "bg-violet-500/60"
      : card.category === "Fashion"
      ? "bg-purple-500/60"
      : card.category === "Food"
      ? "bg-green-500/60"
      : card.category === "Travel"
      ? "bg-rose-500/60"
      : card.category === "Culture"
      ? "bg-orange-500/60"
      : "";
{
    label: string;
    className: string;
  };
*/
const categories = [
  {
    label: "Style",
    className: "bg-sky-100 hover:bg-sky-200",
  },
  {
    label: "Fashion",
    className: "bg-purple-100 hover:bg-purple-200",
  },
  {
    label: "Food",
    className: "bg-green-100 hover:bg-green-200",
  },
  {
    label: "Travel",
    className: "bg-rose-100 hover:bg-rose-200",
  },
  {
    label: "Culture",
    className: "bg-orange-100 hover:bg-orange-200",
  },
  {
    label: "Coding",
    className: "bg-violet-100 hover:bg-violet-200",
  },
];

export default function Categories() {
  return (
    <section className="flex flex-col items-start justify-center w-full">
      <p className="text-slate-500 text-base font-medium">{"Discover by topic"}</p>
      <h2 className="font-bold text-xl">Categories</h2>
      <div className="grid grid-cols-3 gap-4 mx-auto w-full pt-6 px-6">
        {categories.map((cat) => (
          <SimpleCategoryCard key={cat.label} card={cat} />
        ))}
      </div>
    </section>
  );
}
