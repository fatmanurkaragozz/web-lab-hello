import { motion } from 'framer-motion';
import Card from './Card';
import Button from './Button';
import PageBackground from './PageBackground';
import ThemeToggle from './ThemeToggle';

interface BlogPageProps {
  onBack: () => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export function BlogPage({ onBack, isDarkMode, toggleDarkMode }: BlogPageProps) {
  const articles = [
    {
      id: 1,
      title: "ŞAH MAT : YAPAY ZEKA VS İNSAN",
      excerpt: "Geçenlerde bir satranç turnuvasına katıldım ve gerçekten güçlü rakiplerle karşılaştım. Her maçta zorlu hamleler, stratejik hesaplamalar derken aklıma bir soru takıldı: “Acaba dünyanın en iyi satranç oyuncularından biriyle oynasaydım nasıl bir sonuç alırdım?” Ama bu kez rakibim bir insan değil, bir yapay zekâ olacaktı.",
      readTime: "4 dk okuma",
      date: "14 Mart 2025",
      tags: ["React", "JavaScript", "Frontend"],
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=200&fit=crop",
      url: "https://medium.com/@fatmaNurK/%C5%9Fah-mat-yapay-zeka-vs-i%CC%87nsan-63c841406ad9"
    },
    {
      id: 2,
      title: "Matrislerin Yazılım Dünyasındaki Evrimi ve Reginald Denny Olayı: Matematiğin Suç Tespitindeki Gücü",
      excerpt: "Matrisler, günümüzde birçok bilimsel ve teknolojik alanda kritik bir araç olarak kullanılmaktadır. Tarih boyunca bu matematiksel yapı, farklı alanlarda gelişerek bugünkü güçlü halini almıştır.",
      readTime: "3 dk okuma",
      date: "20 Şubat 2025",
      tags: ["TypeScript", "JavaScript", "Development"],
      image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=200&fit=crop",
      url: "https://medium.com/@fatmaNurK/matrislerin-yaz%C4%B1l%C4%B1m-d%C3%BCnyas%C4%B1ndaki-evrimi-ve-reginald-denny-olay%C4%B1-matemati%C4%9Fin-su%C3%A7-tespitindeki-g%C3%BCc%C3%BC-edaf787fbc74"
    },
    {
      id: 3,
      title: "Yapay Zeka ve Veri Bilimi: Geleceği İnşa Eden Güçler",
      excerpt: "Yapay zeka ve makine öğrenimi, günümüz dünyasında hayatın birçok alanında devrim yaratıyor. Bu yazıda, yapay zekanın farklı sektörlerdeki kullanım alanlarını, ilgili algoritmaları ve gerçek dünya örnekleriyle inceleyeceğiz. Ayrıca veri bilimi ve yapay zekaya ilgi duyanlar için temel kavramlara da değineceğiz.",
      readTime: "3 dk okuma",
      date: "27 Ocak 2025",
      tags: ["Next.js", "React", "Full-Stack"],
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=200&fit=crop",
      url: "https://medium.com/@fatmaNurK/yapay-zeka-ve-veri-bilimi-gelece%C4%9Fi-i%CC%87n%C5%9Fa-eden-g%C3%BC%C3%A7ler-5bd1611ab05f"
    },

  ];

  return (
    <motion.main
      className="relative min-h-screen p-4 md:p-8 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <PageBackground isDarkMode={isDarkMode} />
      
      {/* Üst Navigasyon - Geri Dön Butonu */}
      <div className="fixed top-6 left-24 z-[110]">
        <Button
          variant="ghost"
          onClick={onBack}
          className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-md dark:text-white border border-white/20 px-6 h-14"
        >
          ← Geri Dön
        </Button>
      </div>

      {/* Global Tema Butonu (Component içinde fixed top-6 left-6) */}
      <ThemeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

      <div className="relative max-w-7xl mx-auto z-10 pt-44">
        {/* Header */}
        <motion.header 
          className="mb-12"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div>
            <h1 className="text-3xl md:text-5xl font-black italic uppercase mb-4 text-slate-900 dark:text-white tracking-widest">
              Yazılarım
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg font-medium max-w-2xl border-l-4 border-green-500 pl-4">
              Teknoloji, yazılım ve tasarım üzerine düşüncelerimi paylaştığım Medium yazılarım.
            </p>
          </div>
        </motion.header>

        {/* Articles Grid */}
        <motion.section
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {articles.map((article, index) => (
            <Card
              key={article.id}
              title={article.title}
              image={article.image}
              imageAlt={article.title}
              variant="elevated"
              className="group cursor-pointer"
              footer={
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full text-blue-600 hover:text-blue-700 justify-between group-hover:bg-blue-50 transition-colors"
                  onClick={() => window.open(article.url, '_blank')}
                >
                  <span>Devamını Oku</span>
                  <span>→</span>
                </Button>
              }
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between text-xs text-gray-500 font-medium tracking-wide">
                  <span>{article.date}</span>
                  <span className="bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded-full">{article.readTime}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 text-[10px] font-bold rounded uppercase tracking-wider border border-green-100 dark:border-green-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </motion.section>

        {/* Medium Profile Link */}
        <motion.div
          className="text-center mt-12"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <Button
            variant="primary"
            size="lg"
            className="shadow-xl px-12 py-6 rounded-2xl"
            onClick={() => window.open('https://medium.com/@fatmaNurK', '_blank')}
          >
            <span className="text-xl mr-3">📝</span>
            <span>Medium Profilimi Ziyaret Et</span>
            <span className="ml-3">→</span>
          </Button>
        </motion.div>
      </div>
    </motion.main>
  );
}