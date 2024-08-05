"use client";

import { newsSectionOptions } from "@/services/api/news/query";
import { useSuspenseQuery } from "@tanstack/react-query";
import NewsCard from "../news/NewsCard";
export const dynamic = "force-dynamic";

const PostSection = () => {
  const { data, isLoading } = useSuspenseQuery(newsSectionOptions);

  if (isLoading) {
    return "Loading...";
  }

  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-manrope text-4xl font-bold text-gray-900 text-center mb-14">
          Our Recent News
        </h2>
        <div className="flex justify-center mb-14 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
          {isLoading ? (
            <p className="text-center text-2xl">Loading</p>
          ) : (
            data?.data.map((post) => <NewsCard key={post.id} news={post} />)
          )}
        </div>
        <a
          href="/news"
          className="cursor-pointer border border-gray-300 shadow-sm rounded-full py-3.5 px-7 w-52 flex justify-center items-center text-gray-900 font-semibold mx-auto transition-all duration-300 hover:bg-gray-100"
        >
          View All
        </a>
      </div>
    </section>
  );
};

export default PostSection;
