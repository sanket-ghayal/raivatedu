import { Poppins, Nunito } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

// next/font downloads fonts at build time and self-hosts them (fast, no layout shift)
const heading = Poppins({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-heading",
  display: "swap",
});
const body = Nunito({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

// Default metadata. Each page can override title and description.
export const metadata = {
  title: {
    default: "Raivatedu | Learn from mentors who've done it",
    template: "%s | Raivatedu",
  },
  description:
    "Live courses, 1-on-1 mentors and admissions support for students who want a career, not just a certificate.",
  openGraph: {
    title: "Raivatedu | Learn from mentors who've done it",
    description:
      "Live courses, 1-on-1 mentors and admissions support for students who want a career.",
    type: "website",
  },
};

// layout.js wraps every page, like shared middleware in Express
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
