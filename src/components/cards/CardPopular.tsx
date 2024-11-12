import * as React from "react";

type Category = "Style" | "Fashion" | "Food" | "Travel" | "Culture" | "Coding";

interface CardBlogProps {
  card: {
    title: string;
    text: string;
    date: string;
    category: Category;
    img: string;
    author: string;
  };
}
/*
label:'Style'
className: "bg-sky-100 hover:bg-sky-200",
label: "Fashion",
className: "bg-purple-100 hover:bg-purple-200",
label: "Food",
className: "bg-green-100 hover:bg-green-200",
label: "Travel",
className: "bg-rose-100 hover:bg-rose-200",
label: "Culture",
className: "bg-orange-100 hover:bg-orange-200",
label: "Coding",
className: "bg-violet-100 hover:bg-violet-200",
*/

export function CardPopularBlog({ card }: CardBlogProps) {
  const bgColor =
    card.category === "Style"
      ? "bg-sky-600"
      : card.category === "Coding"
      ? "bg-violet-600"
      : card.category === "Fashion"
      ? "bg-purple-600"
      : card.category === "Food"
      ? "bg-green-600"
      : card.category === "Travel"
      ? "bg-rose-600"
      : card.category === "Culture"
      ? "bg-orange-600"
      : "";

  return (
    <article className="bg-white w-[350px] px-3 rounded-2xl py-2 border h-28 max-h-36">
      <section className="flex flex-col justify-center items-start">
        <p
          className={`${bgColor} text-slate-200 font-semibold text-sm rounded-full p-1 px-2`}
        >
          {card.category}
        </p>
        <h1 className="text-slate-800 font-semibold text-xl">{card.title}</h1>
      </section>
      <section className="flex justify-center items-center gap-x-4">
        <p className="font-bold text-slate-950">{card.author}</p>
        {"-"}
        <p className="text-slate-700 font-medium">{card.date}</p>
      </section>
    </article>
  );
}
