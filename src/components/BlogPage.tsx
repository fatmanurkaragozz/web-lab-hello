import { motion } from 'motion/react';

interface BlogPageProps {
  onBack: () => void;
}

export function BlogPage({ onBack }: BlogPageProps) {
  const articles = [
    {
      id: 1,
      title: "React 18'in Yeni Özellikleri ve Performans İyileştirmeleri",
      excerpt: "React 18 ile gelen Concurrent Features, Automatic Batching ve diğer önemli güncellemeleri keşfedin.",
      readTime: "8 dk okuma",
      date: "15 Mart 2024",
      tags: ["React", "JavaScript", "Frontend"],
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=200&fit=crop",
      url: "#"
    },
    {
      id: 2,
      title: "TypeScript ile Daha Güvenli Web Geliştirme",
      excerpt: "TypeScript'in sunduğu tip güvenliği ile nasıl daha kaliteli kod yazabileceğimizi öğrenin.",
      readTime: "12 dk okuma",
      date: "8 Mart 2024",
      tags: ["TypeScript", "JavaScript", "Development"],
      image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=200&fit=crop",
      url: "#"
    },
    {
      id: 3,
      title: "Next.js 14 ile Full-Stack Uygulama Geliştirme",
      excerpt: "Next.js'in en son sürümü ile Server Components ve App Router kullanarak modern web uygulamaları geliştirin.",
      readTime: "15 dk okuma",
      date: "1 Mart 2024",
      tags: ["Next.js", "React", "Full-Stack"],
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=200&fit=crop",
      url: "#"
    },
    {
      id: 4,
      title: "Modern CSS: Grid ve Flexbox ile Responsive Tasarım",
      excerpt: "CSS Grid ve Flexbox teknolojilerini kullanarak responsive ve esnek layoutlar oluşturun.",
      readTime: "10 dk okuma",
      date: "22 Şubat 2024",
      tags: ["CSS", "Responsive", "Design"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=200&fit=crop",
      url: "#"
    },
    {
      id: 5,
      title: "Node.js ile RESTful API Geliştirme Best Practices",
      excerpt: "Node.js ve Express kullanarak ölçeklenebilir ve güvenli API'lar geliştirmenin en iyi yöntemleri.",
      readTime: "18 dk okuma",
      date: "14 Şubat 2024",
      tags: ["Node.js", "API", "Backend"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=200&fit=crop",
      url: "#"
    },
    {
      id: 6,
      title: "Web Performance Optimization: Hız ve Kullanıcı Deneyimi",
      excerpt: "Web sitelerinizin performansını artırmak için uygulanabilir teknikler ve araçlar.",
      readTime: "14 dk okuma",
      date: "7 Şubat 2024",
      tags: ["Performance", "UX", "Optimization"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop",
      url: "#"
    }
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