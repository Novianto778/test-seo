import { News } from "@/types/news.type";
import { cn } from "@/utils/cn";
import { slugify } from "@/utils/slugify";
import Image from "next/image";
import Link, { LinkProps } from "next/link";
import React, { HTMLProps } from "react";

type Props = {
  news: News;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps>;

const NewsCard = ({ news, className, ...props }: Props) => {
  const slug = slugify(news.title);
  const hrefLink = `/news/detail?id=${news.id}&title=${slug}`;
  return (
    <Link
      href={hrefLink}
      className={cn(
        "group cursor-pointer w-full max-lg:max-w-xl border border-gray-300 rounded-2xl p-5 transition-all duration-300 hover:border-indigo-600",
        className
      )}
      {...props}
    >
      <div className="flex items-center mb-6">
        <Image
          width={400}
          height={400}
          src="https://pagedone.io/asset/uploads/1696244579.png"
          alt="John image"
          className="rounded-lg w-full"
        />
      </div>
      <div className="block">
        <h4 className="text-gray-900 font-medium leading-8 mb-9">
          {news.title}
        </h4>
        <div className="flex items-center justify-between  font-medium">
          <h6 className="text-sm text-gray-500">Author: {news.author}</h6>
          <span className="text-sm text-indigo-600">
            {new Date(news.publicationdate).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;
