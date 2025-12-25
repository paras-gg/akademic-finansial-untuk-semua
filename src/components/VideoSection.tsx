import { useState } from "react";
import VideoCard from "./VideoCard";
import { toast } from "@/hooks/use-toast";

interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  videoId: string;
}

const videos: Video[] = [
  {
    id: "1",
    title: "Dasar-Dasar Investasi untuk Pemula",
    description: "Pelajari konsep dasar investasi, jenis-jenis instrumen investasi, dan cara memulai perjalanan investasi Anda dengan modal kecil.",
    thumbnail: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=400&h=225&fit=crop",
    videoId: "dQw4w9WgXcQ",
  },
  {
    id: "2",
    title: "Cara Membuat Budget Bulanan yang Efektif",
    description: "Tutorial langkah demi langkah untuk membuat anggaran bulanan yang realistis dan mudah diikuti.",
    thumbnail: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=225&fit=crop",
    videoId: "dQw4w9WgXcQ",
  },
  {
    id: "3",
    title: "Menabung vs Investasi: Mana yang Lebih Baik?",
    description: "Pahami perbedaan antara menabung dan investasi, serta kapan waktu yang tepat untuk melakukan keduanya.",
    thumbnail: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&h=225&fit=crop",
    videoId: "dQw4w9WgXcQ",
  },
  {
    id: "4",
    title: "Tips Mengelola Utang dengan Bijak",
    description: "Strategi efektif untuk mengelola dan melunasi utang, termasuk metode snowball dan avalanche.",
    thumbnail: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=225&fit=crop",
    videoId: "dQw4w9WgXcQ",
  },
  {
    id: "5",
    title: "Membangun Dana Darurat dari Nol",
    description: "Panduan lengkap membangun dana darurat 3-6 bulan pengeluaran untuk keamanan finansial Anda.",
    thumbnail: "https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?w=400&h=225&fit=crop",
    videoId: "dQw4w9WgXcQ",
  },
];

const VideoSection = () => {
  const [activeVideo, setActiveVideo] = useState(videos[0]);

  const handlePlay = (video: Video) => {
    setActiveVideo(video);
  };

  const handleDownload = (title: string, videoId: string) => {
    // Open a download helper or show instructions
    toast({
      title: "Petunjuk Download",
      description: `Untuk mendownload video "${title}", gunakan website seperti y2mate.com atau aplikasi download video lainnya.`,
    });
  };

  const handleShare = (platform: "whatsapp" | "facebook" | "twitter", title: string) => {
    const url = `https://youtube.com/watch?v=${activeVideo.videoId}`;
    const text = `Tonton video edukasi: ${title}`;
    
    const shareUrls = {
      whatsapp: `https://wa.me/?text=${encodeURIComponent(text + " " + url)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(text)}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
    };
    
    window.open(shareUrls[platform], "_blank", "width=600,height=400");
  };

  return (
    <section id="video" className="py-20 relative">
      {/* Background Effect */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Video <span className="text-gradient">Edukasi</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tonton video pembelajaran keuangan yang interaktif dan mudah dipahami
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Video Player */}
          <div className="lg:col-span-2">
            <div className="glass-card overflow-hidden glow-primary">
              <div className="relative aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${activeVideo.videoId}?autoplay=0&rel=0`}
                  title={activeVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{activeVideo.title}</h3>
                <p className="text-muted-foreground text-sm">{activeVideo.description}</p>
              </div>
            </div>
          </div>

          {/* Playlist */}
          <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2 scrollbar-thin">
            <h4 className="text-lg font-semibold text-muted-foreground mb-4">Playlist Video</h4>
            {videos.map((video) => (
              <VideoCard
                key={video.id}
                {...video}
                isActive={activeVideo.id === video.id}
                onPlay={() => handlePlay(video)}
                onDownload={() => handleDownload(video.title, video.videoId)}
                onShare={(platform) => handleShare(platform, video.title)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
