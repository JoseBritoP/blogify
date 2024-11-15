import React from "react";
import MostPopularPost from "./aside/MostPopularBlog";
import Categories from "./aside/Categories";
import BlogsByEditor from "./aside/BlogsByEditor";

export default function Aside() {
  return (
    <aside className="w-full flex flex-col items-center justify-start gap-y-5 lg:w-1/3">
      <MostPopularPost />
      <Categories />
      <BlogsByEditor />
    </aside>
  );
}
