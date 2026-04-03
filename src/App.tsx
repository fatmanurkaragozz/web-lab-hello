import { useState, useEffect } from "react";
import { PortfolioIntro } from "./components/PortfolioIntro";
import { LandingPage } from "./components/LandingPage";
import { ProjectsPage } from "./components/ProjectsPage";
import { BlogPage } from "./components/BlogPage";
import { ContactPage } from "./components/ContactPage";
import { UiKitPage } from "./components/UiKitPage";

type Page = "intro" | "landing" | "projects" | "blog" | "contact" | "uikit";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("intro");
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Tema değişikliğini HTML elementine yansıt
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const handleNavigate = (page: string) => {
    setCurrentPage(page as Page);
  };

  const handleBack = () => {
    setCurrentPage("intro");
  };

  const renderPage = () => {
    const props = { isDarkMode, toggleDarkMode, onBack: handleBack };

    switch (currentPage) {
      case "landing":
        return <LandingPage onNavigate={handleNavigate} isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />;
      case "projects":
        return <ProjectsPage {...props} />;
      case "blog":
        return <BlogPage {...props} />;
      case "contact":
        return <ContactPage {...props} />;
      case "uikit":
        return <UiKitPage {...props} />;
      default:
        return (
          <PortfolioIntro
            onNavigate={handleNavigate}
            isDarkMode={isDarkMode}
            toggleDarkMode={toggleDarkMode}
            onComplete={() => setCurrentPage("landing")}
          />
        );
    }
  };

  return (
    <div className="size-full">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white text-blue-600 px-4 py-2 rounded-md z-[9999] font-bold shadow-lg"
      >
        Ana içeriğe atla
      </a>
      <div id="main-content" tabIndex={-1} className="size-full outline-none">
        {renderPage()}
      </div>
    </div>
  );
}