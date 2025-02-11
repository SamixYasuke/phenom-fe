import "../../public/styles/globals.css";
import Layout from "@/components/Layout";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL("https://www.phenomnet.cloud"),
  title: "Phenom",
  description: `At phenom we’re dedicated to your success, offering innovative and creative features 
      tailored to you. Your path to greatness begins with us, unlock your digital 
      potential today. Together, let’s turn your vision into reality.`,
  icons: {
    icon: "/images/favicon.ico",
    appleIcon: "/images/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Phenom",
    description: ``,
    siteName: "Phenomnet",
    url: "https://www.phenomnet.cloud",
    images: [
      {
        url: "/favicon.ico",
        width: 1200,
        height: 630,
        alt: "Phenomnet Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Phenom",
    description: `
      At phenom we’re dedicated to your success, offering innovative and creative features 
      tailored to you. Your path to greatness begins with us, unlock your digital 
      potential today. Together, let’s turn your vision into reality.
    `,
    images: ["/images/logo.jpg"],
    site: "@phenomnet_cloud",
  },
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
