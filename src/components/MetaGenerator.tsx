"use client";

import { useEffect, useState } from "react";
import CanonicalURL from "./CanonicalURL";

interface MetaParams {
  title: string;
  description: string;
  path?: string | undefined;
  isNotfound?: string;
}

export default function MetaGenerator(params: MetaParams) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const NotFoundMeta = () => {
    return (
      <head>
        {/* <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
        <title>{"Page Not Found"}</title>
      </head>
    );
  };

  const DefaultMeta = () => {
    return (
      <head>
        {/* <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
        <title>{params?.title}</title>
        <meta property="og:title" content={params?.title} />
        {params?.description && (
          <meta name="description" content={`${params?.description}`} />
        )}
        <CanonicalURL />
      </head>
    );
  };
  return (
    <html lang="id">
      {params.isNotfound === "Y" ? <NotFoundMeta /> : <DefaultMeta />}
    </html>
  );
}
