import { useState } from "react";
import { PortfolioIntro } from "./components/PortfolioIntro";
import { ProjectsPage } from "./components/ProjectsPage";
import { BlogPage } from "./components/BlogPage";
import { ContactPage } from "./components/ContactPage";

type Page = "intro" | "projects" | "blog" | "contact";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("intro");

  const handleNavigate = (page: string) => {
    setCurrentPage(page as Page);
  };

  const handleBack = () => {
    setCurrentPage("intro");
  };

  const renderPage = () => {
    switch (currentPage) {
      case "projects":
        return <ProjectsPage onBack={handleBack} />;
      case "blog":
        return <BlogPage onBack={handleBack} />;
      case "contact":
        return <ContactPage onBack={handleBack} />;
      default:
        return <PortfolioIntro onNavigate={handleNavigate} />;
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