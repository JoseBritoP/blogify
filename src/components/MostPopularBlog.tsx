import React from "react";
import { CardPopularBlog } from "./cards/CardPopular";
import { blogs } from "@/constants";

export default function MostPopularBlog() {
  return (
    <section className="flex flex-col items-start justify-center w-5/6">
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
