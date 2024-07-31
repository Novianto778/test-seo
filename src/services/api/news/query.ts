import { NewsParams } from "@/types/news.type";
import { useQuery } from "@tanstack/react-query";
import { getNews, getNewsDetail } from "./api";

export const newsSectionOptions = {
  queryKey: ["news", "section"],
  queryFn: () => getNews({ limit: 3 }),
};

export const useGetPosts = (params?: NewsParams) => {
  return useQuery({
    queryKey: ["news", params],
    queryFn: async () => {
      const response = await getNews(params);
      return response;
    },
  });
};

export const newsOptions = (params?: NewsParams) => {
  return {
    queryKey: ["news", params],
    queryFn: () => getNews(params),
  };
};

// export const useNewsDetail = (id: string) => {
//   return useQuery({
//     queryKey: ["news", id],
//     queryFn: async () => {
//       const response = await getNewsDetail(id);
//       return response;
//     },
//   });
// };

export const newsDetailOptions = (id: string) => {
  return {
    queryKey: ["news", id],
    queryFn: () => getNewsDetail(id),
  };
};
