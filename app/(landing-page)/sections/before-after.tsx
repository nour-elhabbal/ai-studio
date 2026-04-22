import { useTranslations } from 'next-intl';
import { FadeIn, BeforeAfterSlider } from '@/components/index';

export function BeforeAfterSection() {
  const t = useTranslations('Landing');

  return (
    <section className="border-y border-border/50 bg-card/30 px-4 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <h2 className="mb-16 text-center text-4xl font-bold md:text-5xl">{t('Slider.title')}</h2>
        </FadeIn>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <FadeIn delay={0.1}>
            <div className="flex flex-col gap-4">
              <h3 className="px-2 text-xl font-semibold">{t('Slider.solid')}</h3>
              <BeforeAfterSlider
                beforeLabel={t('Slider.before')}
                afterLabel={t('Slider.after')}
                beforeContent={t('Slider.solidBefore')}
                afterContent={t('Slider.solidAfter')}
              />
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="flex flex-col gap-4">
              <h3 className="px-2 text-xl font-semibold">{t('Slider.wearable')}</h3>
              <BeforeAfterSlider
                beforeLabel={t('Slider.before')}
                afterLabel={t('Slider.after')}
                beforeContent={t('Slider.wearableBefore')}
                afterContent={t('Slider.wearableAfter')}
              />
            </div>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="flex flex-col gap-4">
              <h3 className="px-2 text-xl font-semibold">{t('Slider.mafraresh')}</h3>
              <BeforeAfterSlider
                beforeLabel={t('Slider.before')}
                afterLabel={t('Slider.after')}
                beforeContent={t('Slider.mafrareshBefore')}
                afterContent={t('Slider.mafrareshAfter')}
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
