import { Analytics } from '@vercel/analytics/react';
import './global.css';
import localFont from '@next/font/local';
import AnalyticsWrapper from '../components/analytics';

  export const metadata = {
    title: 'Anton Stallbörger',
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview' : -1,
            'max-image-preview' : 'large',
            'max-snippet' : -1,
        }
    },
    twitter : {
        title: 'Anton Stallbörger',
        card: 'summary_large_image',
    },
    icons: {
        shortcut: '/favicon.ico',
    }
  };
  
  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="en">
        <body>
            {children}
            <AnalyticsWrapper />
        </body>
      </html>
    );
  }
  