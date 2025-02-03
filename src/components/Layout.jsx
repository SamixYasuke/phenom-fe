"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const pathname = usePathname();
  const noLayoutPages = ["/login", "/register", "/admin"];

  if (noLayoutPages.includes(pathname)) {
    return (
      <section>
        <div>{children}</div>
      </section>
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
