import React from "react";
import { CardBlog } from "./cards/CardBlog";
import { blogs } from "@/constants";

export default function RecentPost() {
  return (
    <section className="flex flex-col items-start justify-center gap-y-4 w-2/3">
      <h1 className="text-2xl text-slate-700 font-semibold">Recent Post</h1>
      {blogs.map((blog) => (
        <CardBlog key={blog.category} card={blog} />
      ))}
    </section>
  );
}
