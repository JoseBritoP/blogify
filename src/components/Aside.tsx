import React from "react";
import MostPopularPost from "./aside/MostPopularBlog";
import Categories from "./aside/Categories";
import BlogsByEditor from "./aside/BlogsByEditor";

export default function Aside() {
  return (
    <aside className="lg:border-l border-slate-300 pl-4 w-full flex flex-col items-center justify-start gap-y-5 lg:w-2/3">
      <MostPopularPost />
      <Categories />
      <BlogsByEditor />
    </aside>
  );
}
