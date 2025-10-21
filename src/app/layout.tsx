import type { PropsWithChildren } from 'react';
import type { Metadata } from 'next';
import { getLocale } from 'next-intl/server';

import { Root } from '@/components/Root/Root';
import { I18nProvider } from '@/core/i18n/provider';

import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata: Metadata = {
  title: 'LLL – The World’s First Lossless Crypto Lottery on TON',
  description: 'Play, win, and never lose your principal. LLL is a decentralized, lossless lottery powered by DeFi yields on TON. Stake, earn rewards, and join a fair, transparent, and community-governed gaming revolution.',
  other: {
    'apple-mobile-web-app-title': 'LLL',
  },
};

export default async function RootLayout({ children }: PropsWithChildren) {
  const locale = await getLocale();
  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <I18nProvider>
          <Root>{children}</Root>
        </I18nProvider>
      </body>
      <GoogleAnalytics gaId="G-RLQZKL8E36" />
    </html>
  );
}
