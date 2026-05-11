
import { NavProvider } from "@/context/NavContext";
import ClientWrapper from "../components/layout/ClientWrapper";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <NavProvider>
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </NavProvider>
    </html>
  );
}