import { Button } from "@/components/ui/button";
import { TargetIcon } from "lucide-react";
import Link from "next/link";
import { ReactElement } from "react";

type NagivationProps = {
  title: string;
  end?: ReactElement;
};

export function Navigation(props: NagivationProps) {
  return (
    <div className="bg-primary text-primary-foreground p-4 flex items-center ">
      <Button variant="ghost" size="icon" asChild>
        <Link href="/">
          <TargetIcon className="h-6 w-6" />
        </Link>
      </Button>
      <h1 className="lg:text-2xl sm:text-center text-sm sm:text-base font-semibold ml-4 flex-grow">
        {props.title}
      </h1>
      {props.end}
    </div>
  );
}
