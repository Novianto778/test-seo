import NewsSection from "@/components/features/landing-page/NewsSection";
import { newsSectionOptions } from "@/services/api/news/query";
import { getQueryClient } from "@/utils/get-query-client";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Suspense } from "react";
import NewsContentSkeleton from "../NewsContentSkeleton";

type Props = {};

const OtherNewsContainer = (props: Props) => {
  const queryClient = getQueryClient();
  queryClient.prefetchQuery(newsSectionOptions);
  return (
    <Suspense fallback={<NewsContentSkeleton length={3} className="mt-8" />}>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <NewsSection />
      </HydrationBoundary>
    </Suspense>
  );
};

export default OtherNewsContainer;
