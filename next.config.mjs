/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,

  // Deploy ke GitHub Pages
  output: "export", // build menghasilkan folder statis `out/`
  basePath: "/tailwind-hotelbooking-design", // sesuai nama repository GitHub
  images: {
    unoptimized: true, // GitHub Pages tidak mendukung image optimization
  },
};

export default nextConfig;
