"use client";

import { useState } from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import { ChevronDown } from "lucide-react";

// Contents
import { contentJobCategory } from "@/content";

const CollapsibleCategory = () => {
  const items = contentJobCategory;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="space-y-4">
      <ul className="flex flex-wrap gap-2">
        {!isOpen ? (
          <>
            {items.slice(0, 10)?.map((item: any) => (
              <li key={item.id}>
                <CategoryItem label={item.label} url={item.url} />
              </li>
            ))}
          </>
        ) : (
          <>
            {items?.map((item: any) => (
              <li key={item.id}>
                <CategoryItem label={item.label} url={item.url} />
              </li>
            ))}
          </>
        )}
      </ul>
      <CollapsibleContent asChild></CollapsibleContent>
      <CollapsibleTrigger asChild>
        <Button
          variant="link"
          size="default"
          className="px-0 py-0 text-destructive hover:no-underline"
        >
          {isOpen ? "Lihat selengkapnya" : "Lihat sebagian"}
          <ChevronDown
            className={cn("ml-2 h-4 w-4", isOpen ? "" : "rotate-180")}
          />
        </Button>
      </CollapsibleTrigger>
    </Collapsible>
  );
};

export default CollapsibleCategory;

type TItem = {
  label: string;
  url: string;
};
const CategoryItem = ({ label, url }: TItem) => {
  return (
    <Link
      href={url}
      aria-label={label}
      className={cn(
        buttonVariants({
          variant: "outline",
          size: "sm",
          className: "rounded-full bg-transparent text-xs md:text-sm",
        }),
      )}
    >
      {label}
    </Link>
  );
};
