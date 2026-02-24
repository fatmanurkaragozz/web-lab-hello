import { motion } from 'motion/react';

interface ProjectsPageProps {
  onBack: () => void;
}

export function ProjectsPage({ onBack }: ProjectsPageProps) {
  const projects = [
    {
      id: 1,
      title: "TART",
      description: "Modern React ve Node.js ile geliştirilmiş gençler için tartışma platformu",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
      github: "#",
      demo: "#"
    },
    {
      id: 2,
      title: "Sosyal Medya Dashboard",
      description: "Çoklu sosyal medya hesaplarını yöneten analitik dashboard",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Chart.js"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      github: "#",
      demo: "#"
    },
    {
      id: 3,
      title: "Mobil Uygulama",
      description: "React Native ile geliştirilmiş iOS ve Android uygulaması",
      tech: ["React Native", "Firebase", "Redux", "Expo"],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
      github: "#",
      demo: "#"
    },
    {
      id: 4,
      title: "AI Chatbot",
      description: "OpenAI API entegrasyonu ile akıllı sohbet botu",
      tech: ["Python", "FastAPI", "OpenAI", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
      github: "#",
      demo: "#"
    },
    {
      id: 5,
      title: "Fintech Dashboard",
      description: "Finansal verilerin görselleştirildiği analitik platform",
      tech: ["Vue.js", "D3.js", "Express.js", "MySQL"],
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=300&fit=crop",
      github: "#",
      demo: "#"
    },
    {
      id: 6,
      title: "Hastane Otomasyonu",
      description: "Hastane yönetimi için kapsamlı otomasyon sistemi",
      tech: ["React", "WebRTC", "Socket.io", "Node.js"],
      image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&h=300&fit=crop",
      github: "#",
      demo: "#"
    }
  ];

  return (
    <motion.div
      className="relative min-h-screen bg-gradient-to-b from-sky-400 via-sky-300 to-sky-100 p-8 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* arka plan bulutları (intro sayfasından daha sade bir versiyon) */}
      <div className="absolute inset-0 pointer-events-none">
        {/* ufukta güneş */}
        <motion.div
          className="absolute top-8 right-8 w-12 h-12 bg-yellow-300 rounded-full opacity-70"
          animate={{ rotate: 360, boxShadow: [
            "0 0 15px rgba(253, 224, 71, 0.4)",
            "0 0 25px rgba(253, 224, 71, 0.6)",
            "0 0 15px rgba(253, 224, 71, 0.4)"
          ] }}
          transition={{ rotate: { duration: 20, repeat: Infinity, ease: "linear" }, boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" } }}
        />
        <motion.div
          className="absolute top-24 left-10 w-24 h-12 bg-white rounded-full opacity-80"
          animate={{ x: [0, 40, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-40 right-1/3 w-28 h-14 bg-white rounded-full opacity-70"
          animate={{ x: [0, -35, 0] }}
          transition={{ duration: 9, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-16 right-1/4 w-20 h-10 bg-white rounded-full opacity-60"
          animate={{ x: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Header */}
        <motion.div
          className="flex items-center justify-between mb-12"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div>
            <h1 className="text-5xl mb-4 text-white drop-shadow-2xl">
              Projelerim
            </h1>
            <p className="text-white/90 text-xl drop-shadow">Geliştirdiğim bazı projeler ve uygulamalar</p>
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

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl mb-3 text-gray-900">{project.title}</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/60 text-blue-700 rounded-full text-sm backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  <motion.a
                    href={project.github}
                    className="flex-1 bg-white/90 text-gray-900 py-2 px-4 rounded-lg text-center hover:bg-white/100 transition-colors backdrop-blur-sm"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    GitHub
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg text-center hover:bg-blue-700 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}