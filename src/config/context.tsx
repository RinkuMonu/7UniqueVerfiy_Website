import React, { createContext, useEffect, useState, ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { SEOData } from "../type";

// Define the SEO data structure
interface SeoData {
  page_slug: string;
  [key: string]: any; // add more specific keys if known
}

interface SEOContext {
  seo: SeoData | {};
}

export const ContextData = createContext<SEOContext>({ seo: {} });

interface ContextProviderProps {
  children: ReactNode;
}

export const ContextProvider: React.FC<ContextProviderProps> = ({
  children,
}) => {
  const { pathname } = useLocation();
  const [seo, setSeo] = useState<SEOData | {}>({});

  const [allSeoData, setAllSeoData] = useState<SeoData[]>([]);

  useEffect(() => {
    const fetchSeo = async () => {
      try {
        const res = await fetch(
          "https://cms.sevenunique.com/apis/SEO/get-seo-content.php?website_id=7",
          {
            method: "GET",
          }
        );
        const json = await res.json();
        setAllSeoData(json?.data || []);
      } catch (err) {
        console.error("SEO Fetch Error:", err);
      }
    };

    fetchSeo();
  }, [pathname]);

  useEffect(() => {
    const normalizeUrl = (url: string) =>
      url?.replace(/\/+$/, "").toLowerCase();
    const fullUrl = normalizeUrl(
      window.location.origin + window.location.pathname
    );

    const matched = allSeoData.find((item) => item?.page_slug === fullUrl);

    if (matched) {
      setSeo(matched);
      console.log("Matched SEO:", matched);
    } else {
      setSeo({});
    }
  }, [allSeoData, pathname]);

  return (
    <ContextData.Provider value={{ seo }}>{children}</ContextData.Provider>
  );
};
