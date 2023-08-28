import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";

export const NavButton = () => {
  return (
    <div className="flex items-center justify-center gap-2 pl-2">
      {/* # */}
      <Link
        href="/"
        className={cn(
          buttonVariants({
            variant: "ghost",
            size: "sm",
            className: "rounded-full",
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
            className: "rounded-full",
          }),
        )}
      >
        Login
      </Link>
    </div>
  );
};
