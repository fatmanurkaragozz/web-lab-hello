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

  return <div className="size-full">{renderPage()}</div>;
}