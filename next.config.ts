import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Há outro package-lock.json na pasta pai; fixa a raiz deste projeto
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
