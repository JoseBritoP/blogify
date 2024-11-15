import React from "react";
import { CardEditor } from "../cards/CardEditor";
import { blogs } from "@/constants";

export default function BlogsByEditor() {
  return (
    <section className="flex flex-col w-full gap-y-4 gap-x-2">
      <div>
        <p className="text-slate-600 text-base font-medium">
          {"Chosen by the editor"}
        </p>
        <h2 className="font-bold text-xl">Editors Pick</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full lg:grid-cols-2">
        {blogs.map((blog) => (
          <CardEditor key={blog.category} card={blog} />
        ))}
      </div>
    </section>
  );
}
