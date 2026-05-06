import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';

import { Inter, Cairo } from 'next/font/google';
import { AppLocales } from '@/globals';
import '../globals.css';

import { LanguageSwitcher } from '@/components/language-switcher';
import { cn } from '@/lib/utils';
import { routing } from '@/i18n/routing';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

const cairo = Cairo({
  subsets: ['arabic'],
  variable: '--font-ar',
});

export async function generateMetadata({ params }: { params: Promise<{ locale: AppLocales }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: t('title'),
    description: t('description'),
    icons: {
      icon: '/favicon.ico',
    },
  };
}

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

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
