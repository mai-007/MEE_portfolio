import { Suspense } from "react";
import Analytics from "@/components/Analytics/Analytics";
import '@/styles/globals.scss';
import Layout from '@/components/Layout/Layout';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { notojp, baloo } from '../fonts';



export default function RootLayout({ children }) {
  
  return (
      <html>
        <body className={`${notojp.variable} ${baloo.variable}`}>
        <Suspense>
          <Analytics />
        </Suspense>
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