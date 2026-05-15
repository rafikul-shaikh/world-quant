
// import Navbar from "@/components/layout/Navbar";
// import "./globals.css";

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en" >

//       <body className="bg-black text-white">
//         <Navbar/>
//             {children}
//       </body>
//     </html>
//   );
// }
// ================== code 2 ==================
import "./globals.css";
import { NavProvider } from "@/context/NavContext";
import ClientWrapper from "@/components/layout/ClientWrapper";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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

