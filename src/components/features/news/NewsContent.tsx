"use client";

import { newsOptions } from "@/services/api/news/query";
import { NewsParams } from "@/types/news.type";
import { useSuspenseQuery } from "@tanstack/react-query";
import NewsCard from "./NewsCard";

type Props = {
  params: NewsParams;
};

const NewsContent = ({ params }: Props) => {
  const { data } = useSuspenseQuery(newsOptions(params));

  return (
    <div className="grid grid-cols-12 gap-4">
      {data?.data.map((news) => (
        <NewsCard
          key={news.id}
          news={news}
          className="col-span-12 md:col-span-6 lg:col-span-4"
        />
      ))}
    </div>
  );
};

export default NewsContent;
