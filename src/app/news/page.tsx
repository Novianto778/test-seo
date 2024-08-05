import NewsBanner from "@/components/features/news/NewsBanner";
import NewsContent from "@/components/features/news/NewsContent";
import NewsContentSkeleton from "@/components/features/news/NewsContentSkeleton";
import NewsFilterSidebar from "@/components/features/news/NewsFilterSidebar";
import NewsSectionSkeleton from "@/components/features/news/NewsSectionSkeleton";
import { getNews } from "@/services/api/news/api";
import { newsOptions } from "@/services/api/news/query";
import { NewsParams } from "@/types/news.type";
import { getQueryClient } from "@/utils/get-query-client";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Suspense } from "react";

type Props = {
  searchParams?: {
    [key: string]: string;
  };
};

const NewsPage = ({ searchParams }: Props) => {
  const queryClient = getQueryClient();
  queryClient.prefetchQuery(newsOptions(searchParams));
  return (
    <section className="relative">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <NewsBanner />
        <div className="mt-4">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-3 w-full max-md:max-w-md max-md:mx-auto">
              <NewsFilterSidebar searchParams={searchParams as NewsParams} />
            </div>
            <div className="col-span-12 md:col-span-9">
              <Suspense
                key={JSON.stringify(searchParams)}
                fallback={<NewsContentSkeleton length={6} />}
              >
                <HydrationBoundary state={dehydrate(queryClient)}>
                  <NewsContent params={searchParams as NewsParams} />
                </HydrationBoundary>
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsPage;
