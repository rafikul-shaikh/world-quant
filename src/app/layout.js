
import Navbar from "@/components/layout/Navbar";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" >

      <body className="bg-black text-white">
        <Navbar/>
            {children}
      </body>
    </html>
  );
}

