import Link from "next/link";
import { LucideIcon } from "lucide-react";

// Contents
import { contentNavMenu } from "@/content";

export const NavLists = () => {
  return (
    <nav>
      <ul className="flex items-center justify-center gap-6">
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

const NavItem: React.FC<NavItemProps> = ({ label, url, icon: Icon }) => {
  return (
    <li>
      <Link
        href={url}
        aria-label={label}
        className="flex flex-col items-center gap-1 text-center text-sm font-medium
      "
      >
        <Icon className="h-4 w-4" />
        {label}
      </Link>
    </li>
  );
};
