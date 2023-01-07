'use client';

import 'styles/globals.css';

import { GeistProvider, CssBaseline } from '@geist-ui/core';
import { font, theme } from 'lib/theme';
import { Header, Main, Footer } from 'ui';
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html
      className={`[color-scheme:dark] bg-carbon accent-genius ${font.className}`}
    >
      <body className="flex flex-col min-h-screen">
        <GeistProvider themes={[theme]} themeType={theme.type}>
          <CssBaseline>
            <Header />
            <Main>{children}</Main>
            <Footer />
          </CssBaseline>
        </GeistProvider>
        <Analytics />
      </body>
    </html>
  );
}
