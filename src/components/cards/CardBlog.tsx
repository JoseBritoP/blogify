import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

type Category = "Style" | "Fashion" | "Food" | "Travel" | "Culture" | "Coding";

interface CardBlogProps {
  card: {
    title: string;
    text: string;
    date: string;
    category: Category;
    img: string;
  };
}

export function CardBlog({ card }: CardBlogProps) {
  const textColor =
    card.category === "Style"
      ? "text-sky-600"
      : card.category === "Coding"
      ? "text-violet-600"
      : card.category === "Fashion"
      ? "text-purple-600"
      : card.category === "Food"
      ? "text-green-600"
      : card.category === "Travel"
      ? "text-rose-600"
      : card.category === "Culture"
      ? "text-orange-600"
      : "";

  return (
    <Card className="w-full border rounded-2xl flex justify-center items-start gap-x-4">
      <section className="w-5/6 border-l rounded-2xl">
        <Image
          alt={card.title}
          src={card.img}
          className="h-[300px] w-[400px] rounded-l-2xl"
          height={800}
          width={800}
        />
      </section>
      <CardContent className="grid grid-cols-1">
        <div className="flex flex-col justify-center items-start gap-y-4 pt-2">
          <p className="font-medium text-base text-slate-600">
            {card.date} <small className="text-gray-800"> - </small>
            <span className={`${textColor} font-semibold uppercase`}>
              {card.category}
            </span>
          </p>
          <h1 className="text-gray-800 text-2xl font-bold">{card.title}</h1>
          <p className="text-base text-slate-700">{card.text}</p>
        </div>
      </CardContent>
    </Card>
  );
}
