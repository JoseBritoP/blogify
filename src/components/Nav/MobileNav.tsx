import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { MenuIcon } from "lucide-react";
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

export function MobileNavMenu() {
  return (
    <Menubar className="md:hidden">
      <MenubarMenu>
        <MenubarTrigger><MenuIcon size={60}/></MenubarTrigger>
        <MenubarContent>
          {items.map((item)=>(
            <MenubarItem key={item.label}>
              <Link href={item.href}>{item.label}</Link>
            </MenubarItem>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
