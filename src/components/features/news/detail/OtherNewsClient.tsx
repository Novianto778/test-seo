"use client";
import { getQueryClient } from "@/utils/get-query-client";
import React from "react";
import OtherNewsContainer from "./OtherNewsContainer";

type Props = {};

const OtherNewsClient = (props: Props) => {
  const queryClient = getQueryClient();
  const newsDetailData = queryClient.getQueryData(["news", "2"]);

  return (
    <>
      <OtherNewsContainer detail={newsDetailData.data} />
    </>
  );
};

export default OtherNewsClient;
