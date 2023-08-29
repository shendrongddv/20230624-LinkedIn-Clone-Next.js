import Link from "next/link";

import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { buttonVariants } from "../ui/button";
import { Separator } from "../ui/separator";

// Contents
import { contentNavMenu } from "@/content";

const DesktopNavbar = () => {
  return (
    <div className="ml-auto hidden h-9 items-center md:flex">
      {/* Desktop Links */}
      <ul className="flex items-center justify-center gap-2">
        {contentNavMenu?.map((item) => (
          <li key={item.id}>
            <LinkItem label={item.label} url={item.url} icon={item.icon} />
          </li>
        ))}
      </ul>

      <Separator orientation="vertical" className="ml-1 mr-4" />

      {/* Desktop Buttons */}
      <ul className="flex items-center justify-center gap-2">
        <li>
          <Link
            href="/"
            aria-label="Register"
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
        </li>
        <li>
          <Link
            href="/"
            aria-label="Login"
            className={cn(
              buttonVariants({
                variant: "destructive",
                size: "sm",
                className: "",
              }),
            )}
          >
            Login
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default DesktopNavbar;

type LinkItemProps = {
  label: string;
  url: string;
  icon: LucideIcon;
};
export const LinkItem = ({ label, url, icon: Icon }: LinkItemProps) => {
  return (
    <Link
      href={url}
      aria-label={label}
      className={cn(
        buttonVariants({
          variant: "ghost",
          size: "sm",
          className:
            "flex h-max flex-col items-center justify-center gap-1 px-3 py-2 text-xs",
        }),
      )}
    >
      <Icon className="h-4 w-4" />
      {label}
    </Link>
  );
};
