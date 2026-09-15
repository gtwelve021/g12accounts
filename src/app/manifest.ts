import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "G12 Accounts",
    short_name: "G12 Accounts",
    description: "Accounting, tax, audit and strategic advisory for UAE businesses.",
    start_url: "/",
    display: "standalone",
    background_color: "#f4f1e9",
    theme_color: "#06142d",
    icons: [
      { src: "/images/icon.png", sizes: "32x32", type: "image/png" },
      { src: "/images/icon.png", sizes: "192x192", type: "image/png" },
    ],
  };
}
