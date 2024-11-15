import Image from "next/image";
import Link from "next/link";
import React from "react";

const socials = [
  {
    srcImage: "/images/facebook.png",
    label: "Facebook",
    href: "#",
  },
  {
    srcImage: "/images/instagram.png",
    label: "Instagram",
    href: "#",
  },
  {
    srcImage: "/images/tiktok.png",
    label: "Tiktok",
    href: "#",
  },
  {
    srcImage: "/images/youtube.png",
    label: "Youtube",
    href: "#",
  },
];
export default function SocialLinks() {
  return (
    <>
      <section className="hidden md:flex justify-between items-center p-2 gap-x-4">
        {socials.map((soc) => (
          <Link key={soc.label} href={soc.href}>
            <Image
              alt={`${soc.label}`}
              src={soc.srcImage}
              height={30}
              width={30}
            />
          </Link>
        ))}
      </section>
      <section className="flex sm:hidden justify-between items-center p-1 gap-x-1">
        {socials.map((soc) => (
          <Link key={soc.label} href={soc.href}>
            <Image
              alt={`${soc.label}`}
              src={soc.srcImage}
              height={22}
              width={22}
            />
          </Link>
        ))}
      </section>
    </>
  );
}
