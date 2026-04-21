import type { Metadata } from 'next';
import { Inter, Cairo } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { getUserLocale } from '@/i18n/locale';
import { LanguageSwitcher } from '@/components/language-switcher';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

const cairo = Cairo({
  subsets: ['arabic'],
  variable: '--font-ar',
});

export const metadata: Metadata = {
  title: 'AI Studio',
  description: 'Unleash your productivity with AI Studio',
  icons: {
    icon: '/favicon.ico',
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getUserLocale();
  const messages = await getMessages();
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <html
      lang={locale}
      dir={dir}
      className={cn(
        'h-full',
        'dark',
        'antialiased',
        'font-sans',
        locale === 'ar' ? cairo.variable : inter.variable
      )}
    >
      <body className="relative flex min-h-full flex-col">
        <NextIntlClientProvider messages={messages} locale={locale}>
          <div className="flex items-center justify-between px-8 py-4">
            <h1 className="text-2xl font-bold text-foreground">AI Studio</h1>
            <LanguageSwitcher />
          </div>
          <div className="h-full">{children}</div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
