import React from "react";
import { CardPopularBlog } from "./cards/CardPopular";

type Category = "Style" | "Fashion" | "Food" | "Travel" | "Culture" | "Coding";

interface BlogCards {
  title: string;
  text: string;
  date: string;
  category: Category;
  img: string;
  author: string;
}
const blogs: BlogCards[] = [
  {
    title: "lorem title",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, distinctio natus. Neque quasi delectus labore et inventore. Inventore obcaecati, possimus voluptatibus placeat magnam sequi, tenetur tempore itaque soluta illo enim.",
    date: "11.02.2023",
    img: "/images/p1.jpeg",
    category: "Style",
    author: "John Doe",
  },
  {
    title: "lorem title",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, distinctio natus. Neque quasi delectus labore et inventore. Inventore obcaecati, possimus voluptatibus placeat magnam sequi, tenetur tempore itaque soluta illo enim.",
    date: "11.02.2023",
    img: "/images/p1.jpeg",
    category: "Fashion",
    author: "John Doe",
  },
  {
    title: "lorem title",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, distinctio natus. Neque quasi delectus labore et inventore. Inventore obcaecati, possimus voluptatibus placeat magnam sequi, tenetur tempore itaque soluta illo enim.",
    date: "11.02.2023",
    img: "/images/p1.jpeg",
    category: "Food",
    author: "John Doe",
  },
  {
    title: "lorem title",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, distinctio natus. Neque quasi delectus labore et inventore. Inventore obcaecati, possimus voluptatibus placeat magnam sequi, tenetur tempore itaque soluta illo enim.",
    date: "11.02.2023",
    img: "/images/p1.jpeg",
    category: "Travel",
    author: "John Doe",
  },
  {
    title: "lorem title",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, distinctio natus. Neque quasi delectus labore et inventore. Inventore obcaecati, possimus voluptatibus placeat magnam sequi, tenetur tempore itaque soluta illo enim.",
    date: "11.02.2023",
    img: "/images/p1.jpeg",
    category: "Culture",
    author: "John Doe",
  },
  {
    title: "lorem title",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, distinctio natus. Neque quasi delectus labore et inventore. Inventore obcaecati, possimus voluptatibus placeat magnam sequi, tenetur tempore itaque soluta illo enim.",
    date: "11.02.2023",
    img: "/images/p1.jpeg",
    category: "Coding",
    author: "John Doe",
  },
];

export default function MostPopularBlog() {
  return (
    <section className="flex flex-col items-start justify-start gap-y-4 mx-auto w-full px-10">
      <div>
        <p className="text-slate-500 text-base">{"What's hot"}</p>
        <h2 className="font-bold text-xl">Most Popular</h2>
      </div>
      <div className="grid grid-cols-1 gap-y-4">
        {blogs.map((blog) => (
          <CardPopularBlog key={blog.category} card={blog} />
        ))}
      </div>
    </section>
  );
}
