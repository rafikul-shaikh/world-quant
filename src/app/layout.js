
import { NavProvider } from "@/context/NavContext";
import ClientWrapper from "../components/layout/ClientWrapper";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* Body MUST be a direct child of html or wrapped only by specific Next.js providers */}
      <body className="bg-black text-white">
        <NavProvider>
          <ClientWrapper>
            {children}
          </ClientWrapper>
        </NavProvider>
      </body>
    </html>
  );
}

