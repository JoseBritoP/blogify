"use client";

import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu as NavMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { MobileNavMenu } from "./MobileNav";

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

export function NavigationMenu() {
  return (
    <NavMenu className="hidden md:block">
      <NavigationMenuList>
        {items.map((item) => (
          <NavigationMenuItem key={item.label}>
            <Link href={item.href} legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {item.label}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
      <MobileNavMenu/>
    </NavMenu>
  );
}

