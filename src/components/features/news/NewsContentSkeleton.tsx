import React from "react";
import { SkeletonCard } from "./NewsSectionSkeleton";
import { cn } from "@/utils/cn";

type Props = {
  length: number;
} & React.HTMLAttributes<HTMLDivElement>;

const NewsContentSkeleton = ({ length, className, ...props }: Props) => {
  return (
    <div className={cn("grid grid-cols-12 gap-4 max-w-5xl mx-auto", className)}>
      {[...Array(length)].map((_, index) => (
        <SkeletonCard
          key={index}
          className="col-span-12 md:col-span-6 lg:col-span-4"
        />
      ))}
    </div>
  );
};

export default NewsContentSkeleton;
