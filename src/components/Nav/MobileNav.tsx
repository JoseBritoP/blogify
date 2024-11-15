import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import {
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
} from "@radix-ui/react-menubar";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const items = [
  {
    label: "Home",
    href: "#",
  },
  {
    label: "Contact",
    href: "#",
  },
  {
    label: "About",
    href: "#",
  },
  {
    label: "Login",
    href: "#",
  },
];
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
export function MobileNavMenu() {
  return (
    <Menubar className="md:hidden">
      <MenubarMenu>
        <MenubarTrigger className="border rounded-xl cursor-pointer p-2">
          <MenuIcon className="" size={20} />
        </MenubarTrigger>
        <MenubarContent className="bg-white">
          {items.map((item) => (
            <MenubarItem key={item.label}>
              <Link
                href={item.href}
                className="w-full hover:bg-gray-100 p-2 rounded-xl hover:text-sky-600 font-semibold"
              >
                {item.label}
              </Link>
            </MenubarItem>
          ))}
          <MenubarSub>
            <MenubarSubTrigger className=" hover:bg-gray-100 p-2 rounded-xl hover:text-sky-600 font-semibold px-4 !text-sm cursor-pointer">Follow Me</MenubarSubTrigger>
            <MenubarSubContent className="bg-white p-2 rounded-xl grid grid-cols-2 border">
              {socials.map((soc) => (
                <MenubarItem key={soc.label}>
                  <Link key={soc.label} href={soc.href}>
                    <Image
                      alt={`${soc.label}`}
                      src={soc.srcImage}
                      height={22}
                      width={22}
                    />
                  </Link>
                </MenubarItem>
              ))}
            </MenubarSubContent>
          </MenubarSub>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
