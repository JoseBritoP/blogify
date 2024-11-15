import React from "react";
import { CardPopularBlog } from "../cards/CardPopular";
import { blogs } from "@/constants";

export default function MostPopularBlog() {
  return (
    <section className="flex flex-col items-start justify-center w-full gap-y-3">
      <div>
        <p className="text-slate-500 text-base font-medium">{"What's hot"}</p>
        <h2 className="font-bold text-xl text-slate-800">Most Popular</h2>
      </div>
      <div className="grid grid-cols-1 gap-y-2 md:gap-y-4 w-full pr-2 md:grid-cols-2 lg:grid-cols-2 gap-x-2">
        {blogs.map((blog) => (
          <CardPopularBlog key={blog.category} card={blog} />
        ))}
      </div>
    </section>
  );
}
