import * as React from "react";

import Image from "next/image";
import Link from "next/link";

interface CategoryCardProps {
  card: {
    label: string;
    img?: string;
    className: string;
  };
}
export function CategoryCard({ card }: CategoryCardProps) {
  return (
    <Link href={`/blog?cat=${card.label}`}>
      <article
        className={`w-[130px] md:w-[150px] h-12 ${card.className} flex flex-row-reverse justify-center items-center gap-x-2 transition-colors duration-200 ease-out rounded-2xl`}
      >
        <h2 className="text-gray-800 font-semibold">{card.label}</h2>
        {card.img && (
          <section className="w-8 h-8 overflow-hidden rounded-full">
            <Image
              alt={card.label}
              src={card.img}
              height={60}
              width={60}
              className="rounded-full"
            />
          </section>
        )}
      </article>
    </Link>
  );
}

export function SimpleCategoryCard({ card }: CategoryCardProps) {
  return (
    <Link href={`/blog?cat=${card.label}`}>
      <article
        className={`${card.className} p-2 rounded-xl`}
      >
        <h2 className="text-gray-800 font-semibold text-center">{card.label}</h2>
      </article>
    </Link>
  );
}
