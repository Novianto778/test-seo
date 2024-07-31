import { ReturnResponse, SingleResponse } from "@/types/common.type";
import { satellite } from "../satellite";
import { News, NewsParams } from "@/types/news.type";

export const getNews = async (params?: NewsParams) => {
  const res = await satellite.post<ReturnResponse<News>>("/news", {
    ...params,
  });

  return res.data;
};

export const getNewsDetail = async (id: string) => {
  const res = await satellite.get<SingleResponse<News>>(`/news/${id}`);

  return res.data;
};
