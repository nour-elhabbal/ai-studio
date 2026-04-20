import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { getUserLocale } from "@/i18n/locale";
import { LanguageSwitcher } from "@/components/language-switcher";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Studio",
  description: "Unleash your productivity with AI Studio",
  icons: {
    icon: "/favicon.ico",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getUserLocale();
  const messages = await getMessages();
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <html
      lang={locale}
      dir={dir}
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        outfit.variable,
      )}
    >
      <body className="min-h-full flex flex-col relative">
        <NextIntlClientProvider messages={messages} locale={locale}>
          <div className="flex items-center justify-between px-8 py-4">
            <h1 className="text-2xl font-bold text-foreground">AI Studio</h1>
            <LanguageSwitcher />
          </div>
          <div className="h-full px-8">{children}</div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
