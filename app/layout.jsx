import { Suspense } from "react";
import Analytics from "@/lib/Analytics";
import '@/styles/globals.scss';
import Layout from '@/components/Layout/Layout';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { notojp, baloo } from '../fonts';


export default function RootLayout({ children }) {
  
  return (
      <html>
        <Analytics>
        <body className={`${notojp.variable} ${baloo.variable}`}>
          <Layout>
            {children}
          </Layout>
        </body>
        </Analytics>
      </html>
  );
}

export const metadata = {
  robots: {
    index: false,
  },
}