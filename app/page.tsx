import { Booking } from '@/components/booking'
import { CapacityBar } from '@/components/capacity-bar'
import { CaseStudies } from '@/components/case-studies'
import { CtaBanner } from '@/components/cta-banner'
import { DistributionPitch } from '@/components/distribution-pitch'
import { Hero } from '@/components/hero'
import { MarqueeStrip } from '@/components/marquee-strip'
import { ScrollSnake } from '@/components/scroll-snake'
import { SideNav } from '@/components/side-nav'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { SystemSection } from '@/components/system-section'
import { VslVideo } from '@/components/vsl-video'

export default function Page() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-background">
      <ScrollSnake />
      <SideNav />

      <div className="relative z-10">
        <SiteHeader />
        <main>
          <Hero />
          <VslVideo />
          <DistributionPitch />
          <CapacityBar />
          <div className="py-10">
            <MarqueeStrip />
          </div>
          <CaseStudies />
          <SystemSection />
          <CtaBanner />
          <Booking />
        </main>
        <SiteFooter />
      </div>
    </div>
  )
}
