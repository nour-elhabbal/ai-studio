import { useTranslations } from 'next-intl';

import { FadeIn } from '@/components/index';

export function TestimonialsSection() {
  const t = useTranslations('Landing');

  const testimonials = [
    {
      name: t('Testimonials.t1Name'),
      role: t('Testimonials.t1Role'),
      quote: t('Testimonials.t1Quote'),
      color: 'bg-emerald-500',
    },
    {
      name: t('Testimonials.t2Name'),
      role: t('Testimonials.t2Role'),
      quote: t('Testimonials.t2Quote'),
      color: 'bg-violet-500',
    },
    {
      name: t('Testimonials.t3Name'),
      role: t('Testimonials.t3Role'),
      quote: t('Testimonials.t3Quote'),
      color: 'bg-blue-500',
    },
    {
      name: t('Testimonials.t4Name'),
      role: t('Testimonials.t4Role'),
      quote: t('Testimonials.t4Quote'),
      color: 'bg-pink-500',
    },
    {
      name: t('Testimonials.t5Name'),
      role: t('Testimonials.t5Role'),
      quote: t('Testimonials.t5Quote'),
      color: 'bg-yellow-500',
    },
    {
      name: t('Testimonials.t6Name'),
      role: t('Testimonials.t6Role'),
      quote: t('Testimonials.t6Quote'),
      color: 'bg-rose-500',
    },
  ];

  return (
    <section className="border-t border-border/50 bg-card/30 px-4 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <h2 className="mb-16 text-center text-4xl font-bold md:text-5xl">
            {t('Testimonials.title')}
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((test, idx) => (
            <FadeIn key={idx} delay={0.1 * idx}>
              <div className="flex h-full flex-col rounded-3xl border border-border bg-card p-8 shadow-sm">
                <div className="mb-6 flex items-center gap-4">
                  <div
                    className={`h-12 w-12 rounded-full ${test.color} flex items-center justify-center text-lg font-bold text-white`}
                  >
                    {test.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{test.name}</h4>
                    <p className="text-xs text-muted-foreground">{test.role}</p>
                  </div>
                </div>
                <p className="flex-1 text-muted-foreground italic">"{test.quote}"</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
