import { useState } from "react";
import ArticleCard from "./ArticleCard";
import { Button } from "./ui/button";

interface Article {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image?: string;
}

const articles: Article[] = [
  {
    id: 1,
    title: "Cara Memulai Investasi Saham untuk Pemula",
    excerpt: "Panduan lengkap bagi Anda yang ingin memulai investasi saham dari nol. Pelajari cara membuka rekening saham, memilih saham yang tepat, dan strategi investasi jangka panjang.",
    date: "20 Des 2024",
    category: "Investasi",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=400&fit=crop",
  },
  {
    id: 2,
    title: "50/30/20: Metode Budgeting Paling Populer",
    excerpt: "Kenali metode budgeting 50/30/20 yang mudah diterapkan. Alokasikan 50% untuk kebutuhan, 30% untuk keinginan, dan 20% untuk tabungan dan investasi.",
    date: "18 Des 2024",
    category: "Budgeting",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop",
  },
  {
    id: 3,
    title: "Tips Menabung untuk Dana Darurat",
    excerpt: "Dana darurat adalah fondasi keuangan yang sehat. Pelajari cara menghitung kebutuhan dana darurat dan strategi menabung yang efektif.",
    date: "15 Des 2024",
    category: "Tabungan",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=400&fit=crop",
  },
  {
    id: 4,
    title: "Mengelola Keuangan untuk Generasi Milenial",
    excerpt: "Tantangan finansial generasi milenial berbeda dengan generasi sebelumnya. Pelajari cara mengelola gaji, menghindari lifestyle inflation, dan membangun kekayaan.",
    date: "12 Des 2024",
    category: "Finansial Pribadi",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
  },
  {
    id: 5,
    title: "Memahami Reksadana: Investasi Mudah untuk Semua",
    excerpt: "Reksadana adalah pilihan investasi yang cocok untuk pemula. Pelajari jenis-jenis reksadana, cara memilih manajer investasi, dan tips investasi reksadana.",
    date: "10 Des 2024",
    category: "Investasi",
    image: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&h=400&fit=crop",
  },
  {
    id: 6,
    title: "Cara Membuat Anggaran Bulanan yang Realistis",
    excerpt: "Anggaran bulanan yang baik adalah kunci kebebasan finansial. Ikuti langkah-langkah praktis untuk membuat anggaran yang sesuai dengan kondisi keuangan Anda.",
    date: "8 Des 2024",
    category: "Budgeting",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=400&fit=crop",
  },
];

const categories = ["Semua", "Investasi", "Budgeting", "Tabungan", "Finansial Pribadi"];

interface ArticlesSectionProps {
  searchQuery: string;
}

const ArticlesSection = ({ searchQuery }: ArticlesSectionProps) => {
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  const filteredArticles = articles.filter((article) => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "Semua" || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleShare = (platform: "whatsapp" | "facebook" | "twitter", title: string) => {
    const url = window.location.href;
    const text = `Baca artikel: ${title}`;
    
    const shareUrls = {
      whatsapp: `https://wa.me/?text=${encodeURIComponent(text + " " + url)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(text)}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
    };
    
    window.open(shareUrls[platform], "_blank", "width=600,height=400");
  };

  return (
    <section id="artikel" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Artikel <span className="text-gradient">Edukasi</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tingkatkan literasi keuangan Anda dengan artikel-artikel berkualitas yang mudah dipahami
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "glow" : "glass"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article, index) => (
            <div
              key={article.id}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ArticleCard
                {...article}
                onShare={(platform) => handleShare(platform, article.title)}
              />
            </div>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Tidak ada artikel yang ditemukan.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ArticlesSection;
