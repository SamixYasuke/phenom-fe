import "../../public/styles/globals.css";
import Layout from "@/components/Layout";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Phenom",
  description: ``,
  icons: {
    icon: "/images/favicon.ico",
    appleIcon: "/images/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
  // openGraph: {
  //   title: "Phenom",
  //   description: ``,
  //   siteName: "Adeshola Charity Foundation",
  //   images: [
  //     {
  //       url: "/favicon.ico",
  //       width: 1200,
  //       height: 630,
  //       alt: "Adeshola Charity Foundation Logo",
  //     },
  //   ],
  // },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Phenom",
  //   description: ``,
  //   images: ["/images/logo.png"],
  //   site: "@phenom",
  // },
  charset: "UTF-8",
  generator: "Next.js",
  appleMobileWebAppCapable: "yes",
  appleMobileWebAppStatusBarStyle: "default",
  mobileWebAppCapable: "yes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Layout children={children} />
      </body>
    </html>
  );
}
