import { Suspense } from "react";
import Analytics from "@/components/Analytics";
import '@/styles/globals.scss';
import Layout from '@/components/Layout/Layout';
//import AOS from 'aos';
import 'aos/dist/aos.css';

import { notojp, baloo } from '../fonts';



export default function RootLayout({ children }) {
  
  return (
      <html>
        <Suspense>
          <Analytics />
        </Suspense>
        <body className={`${notojp.variable} ${baloo.variable}`}>
          <Layout>
            {children}
          </Layout>
        </body>
      </html>
  );
}

export const metadata = {
  robots: {
    index: false,
  },
}
