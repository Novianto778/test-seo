import { getServerSideSitemap, ISitemapField } from "next-sitemap";
import { redirect } from "next/navigation";

export async function GET(
  request: Request,
  {
    params,
  }: {
    params: {
      dynamicURL: string;
    };
  }
) {
  const { dynamicURL } = params;
  const [type, page] = dynamicURL.replace(".xml", "").split("-");

  const limit = 100;

  const urlList = [
    {
      type: "posts",
      getter: async (page: string) => {
        const posts = await fetch(
          `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`
        );
        return await posts.json();
      },
    },
    {
      type: "users",
      getter: async (page: string) => {
        const users = await fetch(
          `https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=${limit}`
        );
        return await users.json();
      },
    },
  ];

  const url = urlList.find((u) => u.type === type);

  if (!url) {
    redirect("/not-found");
  }

  try {
    const sitemap = await url.getter(page);
    if (sitemap.length === 0) redirect("/not-found");
    return getServerSideSitemap(sitemap, {
      "Content-Type": "application/xml",
    });
  } catch (error) {
    redirect("/not-found");
  }
}
