import Image from "next/image";
import React from "react";

export default function Featured() {
  return (
    <section className="mt-7 w-full">
      <h1 className="font-semibold text-xl">
        <b>Hey, José here!</b> Discover my stories and creative ideas.
      </h1>
      <article className="mt-14 flex justify-center items-center gap-12  mx-auto w-2/3">
        <Image
          src="/images/p1.jpeg"
          alt="banner"
          className="w-[500px] h-[500px] object-center"
          height={400}
          width={560}
        />
        <div className="flex-1 flex flex-col gap-5">
          <h1 className="text-xl font-medium">
            Lorem ipsum dolor sit amet alim consectetur adipisicing elit.
          </h1>
          <p className="text-base font-medium text-gray-700">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Cupiditate, quam nisi magni ea laborum inventore voluptatum
            laudantium repellat ducimus unde aspernatur fuga. Quo, accusantium
            quisquam! Harum unde sit culpa debitis.
          </p>
          <button className="py-4 px-5 border w-max rounded-lg transition-all duration-200 ease-in-out hover:scale-105 font-semibold cursor-pointer hover:text-sky-700 hover:border-sky-700 bg-gray-100 hover:bg-gray-50 ">
            Read More
          </button>
        </div>
      </article>
    </section>
  );
}
