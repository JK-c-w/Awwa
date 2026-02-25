import Navbar from "@/components/Navbar";
import HeroBanner from "@/components/HeroBanner";
import QuickLinks from "@/components/QuickLinks";
import WhatsNew from "@/components/WhatsNew";
import GallerySection from "@/components/GallerySection";
import RegionalLinks from "@/components/RegionalLinks";
import AwwaIframe from "@/components/AwwaIframe";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroBanner />
      <QuickLinks />
      <WhatsNew />
      <GallerySection />
      <RegionalLinks />
      <AwwaIframe />
      <Footer />
    </div>
  );
};

export default Index;
