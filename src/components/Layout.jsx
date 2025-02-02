"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const pathname = usePathname();
  const noLayoutPages = ["/login", "/register"];

  if (noLayoutPages.includes(pathname)) {
    return (
      <html lang="en">
        <body>{children}</body>
      </html>
    );
  }

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
