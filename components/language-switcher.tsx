'use client';

import { Button } from '@/components/ui/button';
import { useLocale } from 'next-intl';
import { setUserLocale } from '@/i18n/locale';
import { useTransition } from 'react';
import { Languages } from 'lucide-react';
import { cn } from '@/lib/utils';

export function LanguageSwitcher() {
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();

  function toggleLocale() {
    const nextLocale = locale === 'en' ? 'ar' : 'en';
    startTransition(() => {
      setUserLocale(nextLocale);
    });
  }

  return (
    <Button
      variant="outline"
      onClick={toggleLocale}
      disabled={isPending}
      className={cn(
        "rounded-full gap-2 px-4 transition-all duration-300",
        "border-border bg-card text-card-foreground shadow-sm",
        "hover:bg-accent hover:text-accent-foreground hover:border-accent hover:shadow-md",
        "focus-visible:ring-ring"
      )}
      aria-label={locale === 'en' ? 'Switch to Arabic' : 'Switch to English'}
    >
      <Languages className="w-4 h-4 text-primary" />
      <span className="font-medium text-sm">
        {locale === 'en' ? 'العربية' : 'English'}
      </span>
    </Button>
  );
}
