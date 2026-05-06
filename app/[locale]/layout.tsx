import type { Metadata } from 'next';
import { Inter, Cairo } from 'next/font/google';
import '../globals.css';
import { cn } from '@/lib/utils';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { LanguageSwitcher } from '@/components/language-switcher';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';

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

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

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
        <NextIntlClientProvider>
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
