import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/utils/cn";
import React from "react";

type Props = {
  length: number;
};

const NewsSectionSkeleton = ({ length }: Props) => {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Skeleton className="w-52 h-14 mx-auto" />
        <div className="flex mt-8 justify-center mb-14 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
          {[...Array(length)].map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
        <Skeleton className="w-52 h-14 mx-auto" />
      </div>
    </section>
  );
};

export default NewsSectionSkeleton;

export function SkeletonCard({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-col space-y-3", className)}>
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
}
