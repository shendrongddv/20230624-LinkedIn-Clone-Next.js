import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Menu } from "lucide-react";

import { SiteLogoNavbar } from "../site-logo";

import { contentNavMenu } from "@/content";
import Link from "next/link";
import { MobileNavItem } from "./nav-item";
import { MobileNavButton } from "./nav-button";

export function MobileToggle() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="secondary" size="icon">
          <Menu className="h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="flex h-screen w-4/5 flex-col gap-4 p-0"
      >
        <div className="flex items-center border-b p-4">
          <SheetClose asChild>
            <SiteLogoNavbar />
          </SheetClose>
        </div>

        <nav>
          <ul>
            {contentNavMenu?.map((item) => (
              <li key={item.id}>
                <SheetClose asChild>
                  <MobileNavItem
                    label={item.label}
                    url={item.url}
                    icon={item.icon}
                  />
                </SheetClose>
              </li>
            ))}
          </ul>
        </nav>
        <MobileNavButton />
      </SheetContent>
    </Sheet>
  );
}
