import NewsDetailContainer from "@/components/features/news/detail/NewsDetailContainer";
import OtherNewsContainer from "@/components/features/news/detail/OtherNewsContainer";
import NewsDetail from "@/components/features/news/NewsDetail";
import NewsDetailSkeleton from "@/components/features/news/NewsDetailSkeleton";
import {
  newsDetailOptions,
  newsSectionOptions,
} from "@/services/api/news/query";
import { getQueryClient } from "@/utils/get-query-client";
import { dehydrate, hydrate, HydrationBoundary } from "@tanstack/react-query";
import React, { Suspense } from "react";

type Props = {
  searchParams: {
    id: string;
    title: string;
  };
};

const NewsDetailPage = ({ searchParams }: Props) => {
  const id = searchParams.id;

  return (
    <div>
      <NewsDetailContainer id={id} />
      <OtherNewsContainer />
    </div>
  );
};

export default NewsDetailPage;
