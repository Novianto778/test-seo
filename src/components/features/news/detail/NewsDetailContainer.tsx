import { newsDetailOptions } from "@/services/api/news/query";
import { getQueryClient } from "@/utils/get-query-client";
import React, { Suspense } from "react";
import NewsDetailSkeleton from "../NewsDetailSkeleton";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import NewsDetail from "../NewsDetail";

type Props = {
  id: string;
};

const NewsDetailContainer = ({ id }: Props) => {
  const queryClient = getQueryClient();
  queryClient.prefetchQuery(newsDetailOptions(id));
  return (
    <Suspense key={id} fallback={<NewsDetailSkeleton />}>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <NewsDetail id={id} />
      </HydrationBoundary>
    </Suspense>
  );
};

export default NewsDetailContainer;
