import React from "react";
import RecentPost from "./RecentPost";
import Aside from "./Aside";

export default function Menu() {
  return (
    <main className="flex w-full gap-4 items-start mx-auto px-10">
      <RecentPost />
      <Aside />
    </main>
  );
}
