import React from "react";
import { CardEditor } from "./cards/CardEditor";
import { blogs } from "@/constants";

export default function BlogsByEditor() {
  return (
    <section className="grid grid-cols-1 gap-y-4 w-5/6">
      <div>
        <p className="text-slate-500 text-base">{"Chosen by the editor"}</p>
        <h2 className="font-bold text-xl">Editors Pick</h2>
      </div>
      <div className="grid grid-cols-1 gap-y-4 w-full">
        {blogs.map((blog) => (
          <CardEditor key={blog.category} card={blog} />
        ))}
      </div>
    </section>
  );
}
