import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServerInfo from "@/components/ServerInfo";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ServerInfo />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Index;
