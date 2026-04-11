import "./globals.css";
import Navbar from "@/components/layout/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body > 
        <Navbar /> 
        <main >
          {children}
        </main>
      </body>
    </html>
  );
}