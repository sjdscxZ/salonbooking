import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServiceCategories from "@/components/ServiceCategories";
import FeaturedSalons from "@/components/FeaturedSalons";
import YouTubeVideos from "@/components/YouTubeVideos";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <ServiceCategories />
        <FeaturedSalons />
        <YouTubeVideos />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
