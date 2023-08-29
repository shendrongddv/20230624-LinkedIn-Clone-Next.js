import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import { SheetClose } from "../ui/sheet";

export const NavButton = () => {
  return (
    <div className="flex items-center justify-center gap-2">
      {/* # */}
      <Link
        href="/"
        className={cn(
          buttonVariants({
            variant: "outline",
            size: "sm",
            className: "",
          }),
        )}
      >
        Bergabung Sekarang
      </Link>

      {/* # */}
      <Link
        href="/"
        className={cn(
          buttonVariants({
            variant: "outline",
            size: "sm",
            className: "",
          }),
        )}
      >
        Login
      </Link>
    </div>
  );
};

export const MobileNavButton = () => {
  return (
    <div className="mt-auto flex flex-col gap-2 border-t p-4">
      {/* # */}
      <SheetClose asChild>
        <Link
          href="/"
          className={cn(
            buttonVariants({
              variant: "outline",
              size: "default",
              className: "w-full rounded-full",
            }),
          )}
        >
          Bergabung Sekarang
        </Link>
      </SheetClose>

      {/* # */}
      <SheetClose asChild>
        <Link
          href="/"
          className={cn(
            buttonVariants({
              variant: "default",
              size: "default",
              className: "w-full rounded-full",
            }),
          )}
        >
          Login
        </Link>
      </SheetClose>
    </div>
  );
};
