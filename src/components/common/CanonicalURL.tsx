"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function CanonicalURL() {
  const params = useSearchParams();
  const [currentUrl, setCurrentUrl] = useState("");
  const [isShow, setIsShow] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(new URL(window.location.href).toString());
      if (currentUrl === "/not-found") {
        setIsShow(false);
      }
    }
  }, [typeof window !== "undefined", params]);

  if (!isShow) return null;

  return <link rel="canonical" href={currentUrl} />;
}
