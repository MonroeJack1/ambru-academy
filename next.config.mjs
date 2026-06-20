/** @type {import('next').NextConfig} */

// When deploying to GitHub Pages under a repo subdirectory (e.g. username.github.io/repo-name),
// set the NEXT_PUBLIC_BASE_PATH env var to the repo name, e.g. "/repo-name".
// Leave it empty when deploying to a custom domain or a user/org root page.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

const nextConfig = {
  // Static HTML export — required for GitHub Pages
  output: "export",

  // Trailing slashes ensure index.html files resolve correctly on static hosts
  trailingSlash: true,

  // basePath and assetPrefix must match for assets to resolve under a subpath
  basePath,
  assetPrefix: basePath,

  // Next.js Image Optimization requires a server; disable it for static export
  images: {
    unoptimized: true,
  },

  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig
