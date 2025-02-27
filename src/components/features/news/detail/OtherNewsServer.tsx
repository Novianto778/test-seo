import { newsSectionOptions } from "@/services/api/news/query";
import { getQueryClient } from "@/utils/get-query-client";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import React, { Suspense } from "react";
import NewsSection from "../../landing-page/NewsSection";
import NewsContentSkeleton from "../NewsContentSkeleton";

type Props = {};

const OtherNewsServer = (props: Props) => {
  const queryClient = getQueryClient();
  queryClient.prefetchQuery(newsSectionOptions);
  return (
    <div>
      <Suspense fallback={<NewsContentSkeleton length={3} className="mt-8" />}>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <NewsSection />
        </HydrationBoundary>
      </Suspense>
    </div>
  );
};

export default OtherNewsServer;
