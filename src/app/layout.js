import { Karla } from "next/font/google";
import "./globals.css";

const karla = Karla({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "FluentiSpanglish",
  description: "By Oscar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${karla.className}`}>{children}</body>
    </html>
  );
}
