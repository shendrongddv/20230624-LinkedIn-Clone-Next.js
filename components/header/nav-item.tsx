import Link from "next/link";
import { LucideIcon } from "lucide-react";

// Contents
import { contentNavMenu } from "@/content";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";

export const NavLists = () => {
  return (
    <nav>
      <ul className="flex items-center justify-center gap-2">
        {contentNavMenu?.map((item) => (
          <NavItem
            key={item.id}
            label={item.label}
            url={item.url}
            icon={item.icon}
          />
        ))}
      </ul>
    </nav>
  );
};

interface NavItemProps {
  label: string;
  url: string;
  icon: LucideIcon;
}

export const NavItem: React.FC<NavItemProps> = ({ label, url, icon: Icon }) => {
  return (
    <li>
      <Link
        href={url}
        aria-label={label}
        className={cn(
          buttonVariants({
            variant: "outline",
            size: "sm",
            className: "",
          }),
        )}
      >
        <Icon className="mr-2 h-4 w-4" />
        {label}
      </Link>
    </li>
  );
};

export const MobileNavItem: React.FC<NavItemProps> = ({
  label,
  url,
  icon: Icon,
}) => {
  return (
    <Link
      href={url}
      aria-label={label}
      className={cn(
        buttonVariants({
          variant: "ghost",
          size: "default",
          className: "flex items-center justify-start gap-2 rounded-none",
        }),
      )}
    >
      <Icon className="h-4 w-4" />
      {label}
    </Link>
  );
};
