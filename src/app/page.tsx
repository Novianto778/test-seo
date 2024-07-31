import Hero from "@/components/features/landing-page/Hero";
import NewsSection from "@/components/features/landing-page/NewsSection";
import NewsContentSkeleton from "@/components/features/news/NewsContentSkeleton";
import NewsSectionSkeleton from "@/components/features/news/NewsSectionSkeleton";

import { newsSectionOptions } from "@/services/api/news/query";
import { getQueryClient } from "@/utils/get-query-client";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Suspense } from "react";

export default function Home() {
  const queryClient = getQueryClient();
  queryClient.prefetchQuery(newsSectionOptions);

  return (
    <main>
      <Hero />
      <Suspense fallback={<NewsContentSkeleton length={3} />}>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <NewsSection />
        </HydrationBoundary>
      </Suspense>
    </main>
  );
}
