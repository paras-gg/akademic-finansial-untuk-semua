import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ArticlesSection from "@/components/ArticlesSection";
import VideoSection from "@/components/VideoSection";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <Helmet>
        <title>Akademic - Platform Edukasi Finansial Indonesia</title>
        <meta name="description" content="Pelajari budgeting, investasi, tabungan, dan pengelolaan keuangan pribadi dengan materi yang mudah dipahami dan gratis untuk semua." />
        <meta name="keywords" content="edukasi finansial, literasi keuangan, investasi, budgeting, tabungan, keuangan pribadi" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header onSearch={setSearchQuery} searchQuery={searchQuery} />
        <main>
          <HeroSection />
          <ArticlesSection searchQuery={searchQuery} />
          <VideoSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
