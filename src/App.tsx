import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { ProjectModal } from './components/ProjectModal';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { DifferentialsSection } from './components/DifferentialsSection';
import { ProcessSection } from './components/ProcessSection';
import { FeatureBanner } from './components/FeatureBanner';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Project } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedServiceForContact, setSelectedServiceForContact] = useState<string>('Residencial');

  const scrollToContact = (serviceName?: string) => {
    if (serviceName) {
      setSelectedServiceForContact(serviceName);
    }
    const contactElement = document.getElementById('contato');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const projectsElement = document.getElementById('projetos');
    if (projectsElement) {
      projectsElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FBFBFA] text-[#121314] flex flex-col font-sans selection:bg-[#121314] selection:text-white">
      {/* 1. Header */}
      <Header onOpenProjectRequest={() => scrollToContact()} />

      <main className="flex-grow">
        {/* 2. Hero */}
        <Hero
          onExploreProjects={scrollToProjects}
          onTalkToArchitect={() => scrollToContact()}
        />

        {/* 3. Projetos */}
        <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />

        {/* 4. Serviços */}
        <ServicesSection onSelectService={(serviceTitle) => scrollToContact(serviceTitle)} />

        {/* 5. Sobre a NOVA ARQ */}
        <AboutSection />

        {/* 6. Diferenciais */}
        <DifferentialsSection />

        {/* 7. Processo */}
        <ProcessSection />

        {/* 8. Seção Visual de Destaque */}
        <FeatureBanner onStartProject={() => scrollToContact()} />

        {/* 9. Depoimentos */}
        <TestimonialsSection />

        {/* 10. CTA + 11. Contato */}
        <ContactSection preselectedService={selectedServiceForContact} />
      </main>

      {/* 12. Footer */}
      <Footer />

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onRequestSimilar={(projectName) => {
          scrollToContact(`Projeto inspirado em ${projectName}`);
        }}
      />
    </div>
  );
}
