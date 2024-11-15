import CategoryList from "@/components/cards/CategoryList";
import Featured from "@/components/Featured";
import Menu from "@/components/Menu";
import React from "react";

export default function HomePage() {
  return (
    <>
      <Featured />
      <CategoryList />
      <Menu />
    </>
  );
}
