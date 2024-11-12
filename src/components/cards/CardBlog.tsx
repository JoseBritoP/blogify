import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
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
    <Card className="w-[350px]">
      <CardHeader className="h-24 w-36 object-contain">
        <Image alt={card.title} src={card.img} height={80} width={80} />
      </CardHeader>
      <CardContent className="flex flex-col items-start justify-center gap-10">
        <p className="font-medium text-base text-slate-600">
          {card.date} <small className="text-gray-800">-</small>
          <span className={`${textColor} font-semibold uppercase`}>
            {card.category}
          </span>
        </p>
        <h1 className="text-gray-800 text-xl font-semibold">{card.title}</h1>
        <p className="text-sm text-slate-700">{card.text}</p>
      </CardContent>
      <CardFooter className="flex justify-start items-center">
        <Button className="bg-none border-b border-rose-500 text-xl font-semibold">
          Read more
        </Button>
      </CardFooter>
    </Card>
  );
}
