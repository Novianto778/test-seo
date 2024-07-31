"use server";

import { redirect } from "next/navigation";

export const filterNews = async (formData: FormData) => {
  const from = formData.get("from") as string;
  const to = formData.get("to") as string;
  const q = formData.get("q") as string;

  const params = new URLSearchParams();
  if (from) {
    params.append("from", from);
  }

  if (to) {
    params.append("to", to);
  }

  if (q) {
    params.append("q", q);
  }

  redirect("/news?" + params.toString());
};
