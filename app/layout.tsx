// 'use client';
// import "./globals.css";
// import { ConvexProvider } from "convex/react";
// import { client } from "../convexClient";
// import Sidebar from "./components/Sidebar";

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <body>
//         <ConvexProvider client={client}>
//           <div className="h-screen flex bg-gray-100">
//             <div className="w-80 border-r bg-white shadow-sm">
//               <Sidebar />
//             </div>
//             <div className="flex-1 overflow-hidden">{children}</div>
//           </div>
//         </ConvexProvider>
//       </body>
//     </html>
//   );
// }
// app/layout.tsx
      // import "./globals.css";
      // import Providers from "./Providers";

      // export default function RootLayout({
      //   children,
      // }: {
      //   children: React.ReactNode;
      // }) {
      //   return (
      //     <html lang="en">
      //       <body>
      //         <Providers>
      //           {children}
      //         </Providers>
      //       </body>
      //     </html>
      //   );
      // }

 // app/layout.tsx
import './globals.css';
import Providers from './Providers';
import Sidebar from './components/Sidebar';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div className="h-screen flex bg-gray-100">

            {/* Sidebar rendered once */}
            <div className="w-80 border-r bg-white shadow-sm">
              <Sidebar />
            </div>

            {/* Page content */}
            <div className="flex-1 overflow-hidden">
              {children}
            </div>

          </div>
        </Providers>
      </body>
    </html>
  );
}