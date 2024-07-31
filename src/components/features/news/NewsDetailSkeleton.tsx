import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

type Props = {};

const NewsDetailSkeleton = (props: Props) => {
  return (
    <div className="flex flex-col gap-4">
      <Skeleton className="h-60 w-full" />
      <div className="max-w-lg flex flex-col gap-4 mx-auto w-full">
        <Skeleton className="h-8 w-full" />
        <Skeleton className="h-8 w-full" />
        <Skeleton className="h-8 w-full" />
      </div>
    </div>
  );
};

export default NewsDetailSkeleton;
