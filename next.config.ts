import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /** Keep links to the old Duda site (petspaandgrooming.com) and the previous
   *  rebuild working once the domain points here. */
  redirects() {
    return [
      { source: "/dog-grooming", destination: "/services", permanent: true },
      { source: "/grooming", destination: "/services", permanent: true },
      { source: "/about-us", destination: "/about", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
    ];
  },
};

export default nextConfig;
