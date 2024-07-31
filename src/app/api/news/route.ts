import { type NextRequest, NextResponse } from "next/server";

import { createClient } from "@/utils/supabase/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const supabase = createClient();

  // 5 seconds delay
  await new Promise((resolve) => setTimeout(resolve, 5000));

  // make pagination data
  const limit = body?.limit || 10;
  const page = body?.page || 1;
  const offset = (page - 1) * limit;
  const date_from = body?.from;
  const date_to = body?.to;
  const search = body?.q;

  // get data from database
  const query = supabase.from("news").select("*");

  if (date_from && date_to) {
    query.gte("publicationdate", date_from).lte("publicationdate", date_to);
  }

  if (search) {
    query.ilike("title", `%${search}%`);
  }

  query.range(offset, offset + limit - 1);

  const { data, error } = await query;

  if (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const total = (
    await supabase.from("news").select("id", { count: "exact", head: true })
  ).count;

  const responseData = {
    data: data,
    pagination: {
      page,
      perPage: limit,
      total: total,
    },
  };

  return NextResponse.json(responseData);
}
