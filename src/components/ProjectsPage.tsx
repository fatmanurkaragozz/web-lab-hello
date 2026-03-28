import { motion } from 'framer-motion';
import Card from './Card';
import Button from './Button';
import PageBackground from './PageBackground';
import ThemeToggle from './ThemeToggle';

interface ProjectsPageProps {
  onBack: () => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export function ProjectsPage({ onBack, isDarkMode, toggleDarkMode }: ProjectsPageProps) {
  const projects = [
      {
        id: 1,
        title: "TART",
        description: "Modern React ve Node.js ile geliştirilmiş gençler için tartışma platformu. Gerçek zamanlı etkileşim ve güvenli ödeme sistemleri içerir.",
        tech: ["React", "Node.js", "MongoDB", "Stripe"],
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
        github: "#",
        demo: "#"
      },
      {
        id: 2,
        title: "Sosyal Medya Dashboard",
        description: "Çoklu sosyal medya hesaplarını yöneten analitik dashboard. Veri görselleştirme ve raporlama araçları sunar.",
        tech: ["Next.js", "TypeScript", "Tailwind CSS", "Chart.js"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
        github: "#",
        demo: "#"
      },
      {
        id: 3,
        title: "Mobil Uygulama",
        description: "React Native ile geliştirilmiş iOS ve Android uygulaması. Firebase entegrasyonu ile hızlı ve güvenilir veri yönetimi.",
        tech: ["React Native", "Firebase", "Redux", "Expo"],
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
        github: "#",
        demo: "#"
      },
      {
        id: 4,
        title: "AI Chatbot",
        description: "OpenAI API entegrasyonu ile akıllı sohbet botu. Doğal dil işleme yetenekleri ile gelişmiş kullanıcı etkileşimi.",
        tech: ["Python", "FastAPI", "OpenAI", "PostgreSQL"],
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
        github: "#",
        demo: "#"
      },
      {
        id: 5,
        title: "Fintech Dashboard",
        description: "Finansal verilerin görselleştirildiği analitik platform. Karmaşık veri setlerini anlaşılır grafiklere dönüştürür.",
        tech: ["Vue.js", "D3.js", "Express.js", "MySQL"],
        image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&q=80",
        github: "#",
        demo: "#"
      },
      {
        id: 6,
        title: "Hastane Otomasyonu",
        description: "Hastane yönetimi için kapsamlı otomasyon sistemi. Randevu, hasta kayıt ve stok yönetimi özelliklerini barındırır.",
        tech: ["React", "WebRTC", "Socket.io", "Node.js"],
        image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&q=80",
        github: "#",
        demo: "#"
      }
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
          className="flex items-center justify-between mb-12"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div>
            <h1 className="text-3xl md:text-5xl font-black italic uppercase mb-4 text-slate-900 dark:text-white tracking-widest">
              Projelerim
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg font-medium max-w-2xl border-l-4 border-blue-500 pl-4">
              Yaratıcılığımı ve teknik becerilerimi yansıtan seçkin projelerim.
            </p>
          </div>
        </motion.header>

        {/* Projects Grid */}
        <motion.section
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {projects.map((project, index) => (
            <Card
              key={project.id}
              title={project.title}
              image={project.image}
              imageAlt={project.title}
              variant="elevated"
              className="h-full flex flex-col group"
              footer={
                <div className="flex space-x-3">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex-1 border border-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    GitHub
                  </Button>
                  <Button
                    variant="primary"
                    size="sm"
                    className="flex-1"
                    onClick={() => window.open(project.demo, '_blank')}
                  >
                    Canlı Demo
                  </Button>
                </div>
              }
            >
              <div className="flex flex-col h-full">
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-[10px] font-bold rounded uppercase tracking-wider border border-blue-100 dark:border-blue-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </motion.section>
      </div>
    </motion.main>
  );
}