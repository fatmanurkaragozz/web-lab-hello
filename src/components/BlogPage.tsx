import { motion } from 'motion/react';

interface BlogPageProps {
  onBack: () => void;
}

export function BlogPage({ onBack }: BlogPageProps) {
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
    <motion.div
      className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="flex items-center justify-between mb-12"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div>
            <h1 className="text-5xl mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Medium Yazılarım
            </h1>
            <p className="text-gray-600 text-xl">Teknoloji, geliştirme ve deneyimler üzerine yazılarım</p>
          </div>
          
          <motion.button
            onClick={onBack}
            className="bg-white px-6 py-3 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center space-x-2">
              <span>←</span>
              <span>Geri Dön</span>
            </span>
          </motion.button>
        </motion.div>

        {/* Articles Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {articles.map((article, index) => (
            <motion.article
              key={article.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-sm text-gray-600">{article.readTime}</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="text-sm text-gray-500">{article.date}</span>
                </div>
                
                <h2 className="text-xl mb-3 text-gray-800 leading-tight hover:text-blue-600 transition-colors">
                  {article.title}
                </h2>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {article.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <motion.a
                  href={article.url}
                  className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <span>Devamını Oku</span>
                  <span>→</span>
                </motion.a>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Medium Profile Link */}
        <motion.div
          className="text-center mt-12"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <motion.a
            href="#"
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-xl">📝</span>
            <span>Medium Profilimi Ziyaret Et</span>
            <span>→</span>
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
}