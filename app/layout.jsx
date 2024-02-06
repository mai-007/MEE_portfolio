import {
  baseMetadata,
  openGraphMetadata,
  twitterMetadata,
} from '@/lib/baseMetadata'

import '@/styles/globals.scss';
import Layout from '@/components/Layout/Layout';
import { siteMeta } from '@/lib/constants';
const { siteLang } = siteMeta;

import { notojp, baloo } from '../fonts';



export default function RootLayout({ children }) {
  return (
      <html lang={siteLang}>
        <body className={`${notojp.variable} ${baloo.variable}`}>
          <Layout>
            {children}
          </Layout>
        </body>
      </html>
  );
}

export const metadata = {
  ...baseMetadata,
  openGraph: {
    ...openGraphMetadata,
  },
  twitter: {
    ...twitterMetadata,
  },
}