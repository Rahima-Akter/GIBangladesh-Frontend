import ArtisanSpotlight from "@/components/modules/common/home/ArtisanSpotlight";
import CallToAction from "@/components/modules/common/home/CallToAction";
import FeaturedProducts from "@/components/modules/common/home/FeaturedProducts";
import GlobalOutreach from "@/components/modules/common/home/GlobalOutreach";
import Hero from "@/components/modules/common/home/Hero";
import KnowledgeHub from "@/components/modules/common/home/KnowledgeHub";
import Statistics from "@/components/modules/common/home/Statistics";
import TrustAndPartners from "@/components/modules/common/home/TrustAndPartners";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-surface dark:bg-on-surface transition-colors duration-300">
      <Hero />
      <Statistics />
      <FeaturedProducts />
      <GlobalOutreach />
      <ArtisanSpotlight />
      <KnowledgeHub />
      <TrustAndPartners />
      <CallToAction />
    </div>
  );
}