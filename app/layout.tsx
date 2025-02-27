import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'LearnXChain',
  description: 'LearnXChain is the future of learning powered by AI, blockchain, and the metaverse.',
  // url: 'https://learnxchain.io',
  // type: 'website',
  // locale: 'en_US',
  // site_name: 'LearnXChain',
  keywords: ['learnxchain', 'learn', 'xchain', 'ai', 'blockchain', 'metaverse'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
