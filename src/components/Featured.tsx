import Image from "next/image";
import React from "react";

export default function Featured() {
  return (
    <section className="mt-7 w-full px-10 md:px-5 lg:px-2">
      <h1 className="font-semibold text-xl lg:text-2xl">
        <b>Hey, José here!</b> Discover my stories and creative ideas.
      </h1>
      <article className=" w-full mt-8 md:mt-14 flex flex-col sm:flex-row justify-center items-center gap-7 sm:gap-4 lg:gap-12 mx-auto md:max-w-[700px] lg:max-w-[1000px] bg-gray-50/20 rounded-xl rounded-br-none 
      ">
        <Image
          src="/images/p1.jpeg"
          alt="banner"
          className="w-[250px] h-[250px] sm:w-[250px] sm:h-[350px] rounded-xl rounded-l-none rounded-bl-xl lg:w-[450px] lg:h-[500px] object-center"
          height={400}
          width={560}
        />
        <div className="flex-1 flex flex-col gap-5 px-2">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold">
            Lorem ipsum dolor sit amet alim consectetur adipisicing elit.
          </h1>
          <p className="text-sm md:text-base lg:text-lg font-medium text-gray-700">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Cupiditate, quam nisi magni ea laborum inventore voluptatum
            laudantium repellat ducimus unde aspernatur fuga. Quo, accusantium
            quisquam! Harum unde sit culpa debitis.
          </p>
          <button className="border-b-2 hover:border-rose-500 py-4 px-5 rounded-tl-none hover:rounded-br-none w-max transition-all duration-200 ease-in-out hover:scale-105 bg-gray-50 rounded-xl font-semibold cursor-pointer hover:text-sky-500 hover:bg-gray-50/20 shadow shadow-rose-100 mx-auto md:mx-0 ">
            Read More
          </button>
        </div>
      </article>
    </section>
  );
}
