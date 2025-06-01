import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServerInfo from "@/components/ServerInfo";
import DonationShop from "@/components/DonationShop";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ServerInfo />
      <DonationShop />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Index;
