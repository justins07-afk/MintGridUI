import { SiteHeader } from '@/components/site-header';
import { Hero } from '@/components/hero';
import { Problem } from '@/components/problem';
import { Solution } from '@/components/solution';
import { Audience } from '@/components/audience';
import { KitContent } from '@/components/kit-content';
import { Benefits } from '@/components/benefits';
import { PricingCTA } from '@/components/pricing-cta';
import { FAQ } from '@/components/faq';
import { SiteFooter } from '@/components/site-footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white selection:bg-mint-500/30 selection:text-mint-200">
      <SiteHeader />
      <Hero />
      <Problem />
      <Solution />
      <Audience />
      <KitContent />
      <Benefits />
      <PricingCTA />
      <FAQ />
      <SiteFooter />
    </main>
  );
}
