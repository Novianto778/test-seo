import { createClient } from "@/utils/supabase/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  const supabase = createClient();

  // delay 3 sec
  await new Promise((resolve) => setTimeout(resolve, 3000));

  // get data from database
  const query = supabase.from("news").select("*").eq("id", id);

  const { data, error } = await query;

  if (error) {
    return new Response(JSON.stringify({ error }), { status: 500 });
  }

  const newData = {
    data: data[0],
  };

  return new Response(JSON.stringify(newData), { status: 200 });
}
