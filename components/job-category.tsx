// Contents
import { contentJobCategory } from "@/content";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

const JobCategory = () => {
  return (
    <ul className="flex flex-wrap gap-2">
      {contentJobCategory?.map((item) => (
        <li key={item.id}>
          <Link
            href={item.url}
            aria-label={item.label}
            className={cn(
              buttonVariants({
                variant: "outline",
                size: "sm",
                className: "rounded-full bg-transparent text-xs md:text-sm",
              }),
            )}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default JobCategory;
