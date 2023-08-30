// UI
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "./ui/scroll-area";
import { Separator } from "./ui/separator";

// Icons
import { ChevronDown } from "lucide-react";

// Contents
import { contentTopicToLearn } from "@/content";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const SelectTopic = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="w-full justify-between gap-2 md:w-80"
        >
          Pilih topik untuk dipelajari
          <ChevronDown className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 md:w-80">
        <TopicList />
      </PopoverContent>
    </Popover>
  );
};

function TopicList() {
  return (
    <ScrollArea className="h-[50vh] w-full p-0">
      <ul className="space-y-1 px-1">
        {contentTopicToLearn?.map((item) => (
          <li key={item.id}>
            <Link
              href={item.url}
              aria-label={item.title}
              className={cn(
                buttonVariants({
                  variant: "ghost",
                  size: "sm",
                  className:
                    "flex h-max w-full flex-col items-start px-3 py-1 text-sm",
                }),
              )}
            >
              {item.title}
              <small className="text-muted-foreground">
                {item.courseCount}+ Kursus
              </small>
            </Link>
          </li>
        ))}
      </ul>
    </ScrollArea>
  );
}
