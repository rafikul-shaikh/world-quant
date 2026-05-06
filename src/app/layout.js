import "./globals.css";
import Navbar from "@/components/layout/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white font-roc"> 
        <Navbar /> 
          {children}
      </body>
    </html>
  );
}