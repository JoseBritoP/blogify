import * as React from "react";

import { Card } from "@/components/ui/card";
import Image from "next/image";

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

export function CardEditor({ card }: CardBlogProps) {
  const bgColor =
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

  return (
    <Card className="flex w-[400px] md:w-[300px] border p-2 rounded-2xl max-h-[150px] lg:w-full ">
      <section className="w-1/3">
        <Image
          alt={card.title}
          src={card.img}
          className="h-20 w-20 rounded-full"
          height={60}
          width={60}
        />
      </section>
      <section className="w-2/3 flex flex-col items-start justify-start gap-y-1">
        <p
          className={`${bgColor} text-wrap text-slate-200 py-1 px-2 font-semibold text-sm rounded-full`}
        >
          {card.category}
        </p>
        <h2 className="text-start w-full font-bold text-xl">{card.title}</h2>
        <div className="flex">
          <p className="font-bold text-slate-700">{card.author}</p>-
          <p className="text-slate-500 font-semibold">{card.date}</p>
        </div>
      </section>
    </Card>
  );
}
