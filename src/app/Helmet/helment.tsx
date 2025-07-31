import React from "react";
import { SEOData } from "../../type";
import { Helmet } from "react-helmet-async";

interface SEOProps {
  seo: SEOData;
}

const SEO: React.FC<SEOProps> = ({ seo }) => {
  const {
    meta_title,
    meta_description,
    meta_keywords,
    canonical_tag,
    og_type,
    og_title,
    og_description,
    og_url,
    og_site_name,
    og_image,
  } = seo;

  return (
    <Helmet>
      <title>
        {meta_title ||
          "Top API Provider in Jaipur | Reliable API Integration Services"}
      </title>
      <meta
        name="description"
        content={meta_description || "Read more about SevenVerify."}
      />
      <meta
        name="keywords"
        content={meta_keywords || "aadhar verify, pen verify, bank verify"}
      />
      <meta property="og:title" content={og_title || meta_title} />
      <meta
        property="og:description"
        content={og_description || meta_description}
      />
      <meta property="og:type" content={og_type || "website"} />
      <meta property="og:url" content={og_url || ""} />
      <meta property="og:image" content={og_image || ""} />
      <meta property="og:site_name" content={og_site_name || "SevenVerify"} />
      <link rel="canonical" href={canonical_tag || og_url} />
    </Helmet>
  );
};

export default SEO;
