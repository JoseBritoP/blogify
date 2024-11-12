import * as React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

interface CategoryCardProps {
  card: {
    label: string;
    img: string;
    className:string
  };
}
export function CategoryCard({ card }: CategoryCardProps) {
  return (
    <article className={`w-[150px] h-12 ${card.className} flex flex-row-reverse justify-center items-center gap-x-2 rounded-lg`}>
      <h2 className="text-gray-800 font-semibold">{card.label}</h2>
      <section className="w-8 h-8 overflow-hidden rounded-full">
        <Image
          alt={card.label}
          src={card.img}
          height={30}
          width={30}
          className="rounded-full"
        />
      </section>
    </article>
  );
}
