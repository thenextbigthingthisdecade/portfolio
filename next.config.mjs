import nextMDX from "@next/mdx";
import * as fs from "fs";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";

const options = {
  theme: JSON.parse(
    fs.readFileSync(`${process.cwd()}/assets/light-colorblind.json`, "utf8")
  ),
  onVisitHighlightedLine(node) {
    // Each line node by default has `class="line"`.
    node.properties.className.push("highlighted");
  },
  onVisitHighlightedWord(node) {
    // Each word node has no className by default.
    node.properties.className = ["word"];
  },
};

/** @type {import('next').NextConfig} */
const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [[rehypePrettyCode, options]],
    // If you use `MDXProvider`, uncomment the following line.
    providerImportSource: "@mdx-js/react",
  },
});

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "jfcalpmqiygtooekldwr.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/**",
      },
    ],
  },
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
};

export default withMDX(nextConfig);
