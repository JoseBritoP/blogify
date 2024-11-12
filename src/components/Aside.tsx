import React from "react";
import MostPopularPost from "./MostPopularBlog";
import Categories from "./Categories";
import BlogsByEditor from "./BlogsByEditor";

export default function Aside() {
  return (
    <aside className="w-1/3 flex flex-col items-center justify-start gap-y-10">
      <MostPopularPost />
      <Categories />
      <BlogsByEditor />
    </aside>
  );
}
