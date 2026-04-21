import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { FadeIn } from './components/FadeIn';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import {
  CheckCircle2,
  ArrowRight,
  FolderPlus,
  UploadCloud,
  Settings2,
  Type,
  Download,
  Image as ImageIcon,
  Layers,
  Sparkles,
  Globe2,
  RefreshCcw,
  Coins,
  Star as Instagram,
  ShoppingCart,
} from 'lucide-react';

export default function LandingPage() {
  const t = useTranslations('Landing');

  const howItWorksSteps = [
    {
      icon: <FolderPlus className="h-6 w-6 text-primary-foreground" />,
      title: t('HowItWorks.step1Title'),
      desc: t('HowItWorks.step1Desc'),
    },
    {
      icon: <UploadCloud className="h-6 w-6 text-primary-foreground" />,
      title: t('HowItWorks.step2Title'),
      desc: t('HowItWorks.step2Desc'),
    },
    {
      icon: <Settings2 className="h-6 w-6 text-primary-foreground" />,
      title: t('HowItWorks.step3Title'),
      desc: t('HowItWorks.step3Desc'),
    },
    {
      icon: <Type className="h-6 w-6 text-primary-foreground" />,
      title: t('HowItWorks.step4Title'),
      desc: t('HowItWorks.step4Desc'),
    },
    {
      icon: <Download className="h-6 w-6 text-primary-foreground" />,
      title: t('HowItWorks.step5Title'),
      desc: t('HowItWorks.step5Desc'),
    },
  ];

  const features = [
    {
      icon: <ImageIcon className="h-8 w-8 text-primary" />,
      title: t('Features.feat1Title'),
      desc: t('Features.feat1Desc'),
    },
    {
      icon: <Layers className="h-8 w-8 text-secondary" />,
      title: t('Features.feat2Title'),
      desc: t('Features.feat2Desc'),
    },
    {
      icon: <Sparkles className="h-8 w-8 text-primary" />,
      title: t('Features.feat3Title'),
      desc: t('Features.feat3Desc'),
    },
    {
      icon: <Globe2 className="h-8 w-8 text-secondary" />,
      title: t('Features.feat4Title'),
      desc: t('Features.feat4Desc'),
    },
    {
      icon: <RefreshCcw className="h-8 w-8 text-primary" />,
      title: t('Features.feat5Title'),
      desc: t('Features.feat5Desc'),
    },
    {
      icon: <Coins className="h-8 w-8 text-secondary" />,
      title: t('Features.feat6Title'),
      desc: t('Features.feat6Desc'),
    },
  ];

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

  const pricingTiers = [
    {
      name: t('Pricing.starter'),
      price: t('Pricing.starterPrice'),
      features: [
        t('Pricing.featCredits10'),
        t('Pricing.featProjects1'),
        t('Pricing.featTypeSolid'),
        t('Pricing.featVibeNature'),
      ],
      cta: t('Pricing.ctaStarter'),
      href: '/app',
      highlight: false,
    },
    {
      name: t('Pricing.pro'),
      price: t('Pricing.proPrice'),
      suffix: t('Pricing.proSuffix'),
      badge: t('Pricing.mostPopular'),
      features: [
        t('Pricing.featCredits200'),
        t('Pricing.featProjectsUnlimited'),
        t('Pricing.featTypeAll'),
        t('Pricing.featVibeAll'),
        t('Pricing.featPrompt'),
      ],
      cta: t('Pricing.ctaPro'),
      href: '/app',
      highlight: true,
    },
    {
      name: t('Pricing.studio'),
      price: t('Pricing.studioPrice'),
      suffix: t('Pricing.studioSuffix'),
      features: [
        t('Pricing.featCredits600'),
        t('Pricing.featProjectsUnlimited'),
        t('Pricing.featTypeAll'),
        t('Pricing.featVibeAll'),
        t('Pricing.featCustomColor'),
        t('Pricing.featPrompt'),
        t('Pricing.featPriority'),
        t('Pricing.featSupportDedicated'),
      ],
      cta: t('Pricing.ctaStudio'),
      href: '/contact',
      highlight: false,
    },
  ];

  return (
    <div className="flex min-h-screen flex-col overflow-hidden bg-background text-foreground">
      <style>{`
        @keyframes subtle-pulse {
          0%, 100% { transform: scale(1) translateZ(0); opacity: 0.7; }
          50% { transform: scale(1.1) translateZ(0); opacity: 0.4; }
        }
        .animate-subtle-pulse {
          animation: subtle-pulse 12s ease-in-out infinite;
          will-change: transform, opacity;
        }
      `}</style>

      {/* 1. Hero Section */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pt-20 pb-12 text-center md:px-8">
        {/* Breathing blobs */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <div className="animate-subtle-pulse absolute -start-[10%] -top-[20%] h-[50%] w-[50%] rounded-full bg-primary/20 opacity-70 mix-blend-multiply blur-[120px] dark:mix-blend-screen" />
          <div
            className="animate-subtle-pulse absolute -end-[10%] top-[20%] h-[60%] w-[60%] rounded-full bg-secondary/20 opacity-70 mix-blend-multiply blur-[120px] dark:mix-blend-screen"
            style={{ animationDelay: '2s' }}
          />
          <div
            className="animate-subtle-pulse absolute start-[20%] -bottom-[10%] h-[50%] w-[50%] rounded-full bg-primary/10 opacity-50 mix-blend-multiply blur-[100px] dark:mix-blend-screen"
            style={{ animationDelay: '4s' }}
          />
        </div>

        <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center">
          <FadeIn direction="up">
            <span className="mb-6 inline-block rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
              {t('Hero.badge')}
            </span>
          </FadeIn>

          <FadeIn delay={0.2} direction="up">
            <h1 className="mb-6 bg-gradient-to-br from-primary to-secondary bg-clip-text pb-2 text-5xl leading-tight font-bold tracking-tight text-transparent md:text-7xl">
              {t('Hero.headline')}
            </h1>
          </FadeIn>

          <FadeIn delay={0.4} direction="up">
            <p className="mx-auto mb-10 max-w-2xl text-xl leading-relaxed text-muted-foreground md:text-2xl">
              {t('Hero.subheading')}
            </p>
          </FadeIn>

          <FadeIn delay={0.6} direction="up">
            <div className="flex flex-col items-center gap-4 sm:flex-row">
              <Link
                href="/app"
                className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground transition-transform hover:scale-105"
              >
                {t('Hero.ctaPrimary')}
                <ArrowRight className="ms-2 h-5 w-5 rtl:-scale-x-100" />
              </Link>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center rounded-full bg-secondary/10 px-8 py-4 text-lg font-semibold text-secondary-foreground transition-colors hover:bg-secondary/20"
              >
                {t('Hero.ctaSecondary')}
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 2. Social Proof Bar */}
      <section className="border-y border-border/50 bg-card/30 py-8">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="flex flex-col items-center justify-center gap-4 opacity-70 md:flex-row md:gap-8">
            <p className="text-sm font-medium whitespace-nowrap text-muted-foreground">
              {t('SocialProof.label')}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {['Salla', 'Zid', 'Amazon.sa', 'Noon'].map((brand) => (
                <div
                  key={brand}
                  className="flex items-center rounded-full bg-muted px-4 py-1.5 text-sm font-semibold"
                >
                  <ShoppingCart className="me-2 h-4 w-4 text-muted-foreground" />
                  {brand}
                </div>
              ))}
              <div className="flex items-center rounded-full bg-muted px-4 py-1.5 text-sm font-semibold">
                <Instagram className="me-2 h-4 w-4 text-muted-foreground" />
                Instagram
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. How It Works */}
      <section id="how-it-works" className="scroll-mt-20 px-4 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-4xl font-bold md:text-5xl">{t('HowItWorks.title')}</h2>
              <p className="text-xl text-muted-foreground">{t('HowItWorks.subheading')}</p>
            </div>
          </FadeIn>

          <div className="relative flex flex-col justify-between md:flex-row">
            <div className="absolute start-0 end-0 top-8 -z-10 hidden h-0.5 bg-border md:block" />

            {howItWorksSteps.map((step, idx) => (
              <FadeIn key={idx} delay={0.1 * idx} className="flex-1">
                <div className="relative mb-12 flex flex-col items-center px-4 text-center md:mb-0">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border-4 border-background bg-primary shadow-lg">
                    {step.icon}
                  </div>
                  <div className="absolute start-1/2 top-0 -z-10 h-12 w-0.5 -translate-x-1/2 -translate-y-full bg-border md:hidden" />
                  <h3 className="mb-2 text-lg font-bold">
                    <span className="me-2 text-primary">{idx + 1}.</span>
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Before / After Slider Section */}
      <section className="border-y border-border/50 bg-card/30 px-4 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <h2 className="mb-16 text-center text-4xl font-bold md:text-5xl">
              {t('Slider.title')}
            </h2>
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

      {/* 5. Features Section */}
      <section className="px-4 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <h2 className="mb-16 text-center text-4xl font-bold md:text-5xl">
              {t('Features.title')}
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, idx) => (
              <FadeIn key={idx} delay={0.1 * (idx + 1)}>
                <div className="h-full rounded-3xl border border-border bg-card p-8 shadow-sm transition-shadow hover:shadow-md">
                  <div className="mb-6 inline-block rounded-2xl bg-primary/10 p-4">
                    {feature.icon}
                  </div>
                  <h3 className="mb-3 text-xl font-semibold">{feature.title}</h3>
                  <p className="leading-relaxed text-muted-foreground">{feature.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Testimonials */}
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

      {/* 7. Pricing Section */}
      <section className="px-4 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <h2 className="mb-16 text-center text-4xl font-bold md:text-5xl">
              {t('Pricing.title')}
            </h2>
          </FadeIn>

          <div className="mx-auto grid max-w-5xl grid-cols-1 items-stretch gap-8 md:grid-cols-3">
            {pricingTiers.map((tier, idx) => (
              <FadeIn key={idx} delay={0.1 * (idx + 1)}>
                <div
                  className={`relative flex h-full flex-col rounded-3xl border bg-card p-8 ${tier.highlight ? 'z-10 border-primary shadow-lg ring-1 ring-primary md:scale-105' : 'border-border shadow-sm'}`}
                >
                  {tier.highlight && (
                    <div className="absolute start-1/2 -top-4 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-sm font-semibold text-primary-foreground rtl:translate-x-1/2">
                      {tier.badge}
                    </div>
                  )}

                  <h3 className="mb-2 text-2xl font-semibold">{tier.name}</h3>
                  <div className="mb-8 flex items-baseline gap-1">
                    <span className="text-4xl font-bold">{tier.price}</span>
                    {tier.suffix && <span className="text-muted-foreground">{tier.suffix}</span>}
                  </div>

                  <ul className="mb-8 flex-1 space-y-4">
                    {tier.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start text-sm md:text-base">
                        <CheckCircle2 className="me-3 h-5 w-5 shrink-0 text-primary" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={tier.href}
                    className={`w-full rounded-xl px-4 py-3 text-center font-medium transition-colors ${
                      tier.highlight
                        ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                        : 'bg-secondary/10 text-secondary-foreground hover:bg-secondary/20'
                    }`}
                  >
                    {tier.cta}
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Footer */}
      <footer className="relative overflow-hidden border-t border-border bg-card/20 px-4 py-16 md:px-8">
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-30">
          <div className="animate-subtle-pulse absolute start-[20%] bottom-0 h-[50%] w-[50%] rounded-full bg-primary/20 blur-[100px]" />
        </div>
        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-4">
          <div className="col-span-1 md:col-span-1">
            <h2 className="mb-4 text-2xl font-bold text-foreground">AI Studio</h2>
            <p className="mb-6 text-sm text-muted-foreground">{t('Footer.tagline')}</p>
          </div>
          <div>
            <h3 className="mb-4 font-semibold text-foreground">{t('Footer.product')}</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="#how-it-works" className="transition-colors hover:text-primary">
                  {t('Footer.features')}
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="transition-colors hover:text-primary">
                  {t('Footer.pricing')}
                </Link>
              </li>
              <li>
                <Link href="/showcase" className="transition-colors hover:text-primary">
                  {t('Footer.showcase')}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-semibold text-foreground">{t('Footer.company')}</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="transition-colors hover:text-primary">
                  {t('Footer.about')}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="transition-colors hover:text-primary">
                  {t('Footer.blog')}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition-colors hover:text-primary">
                  {t('Footer.contact')}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-semibold text-foreground">{t('Footer.legal')}</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="/privacy" className="transition-colors hover:text-primary">
                  {t('Footer.privacy')}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="transition-colors hover:text-primary">
                  {t('Footer.terms')}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
