import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../types';
import { PROJECTS } from '../data/projectsData';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('Todos');

  const categories = ['Todos', 'Residencial', 'Corporativo', 'Interiores'];

  const filteredProjects =
    activeCategory === 'Todos'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="projetos" className="py-24 sm:py-32 bg-[#FBFBFA] border-t border-[#121314]/8">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-[12px] font-semibold tracking-[0.2em] uppercase text-[#6E706E] block mb-3">
              Portfólio Selecionado
            </span>
            <h2 className="font-display font-semibold text-3xl sm:text-4xl lg:text-5xl text-[#121314] tracking-tight leading-tight text-balance">
              Projetos que traduzem ideias em espaços.
            </h2>
            <p className="mt-4 text-[#4E5052] text-base sm:text-lg font-light leading-relaxed">
              Cada projeto combina estética, funcionalidade e identidade, concebido a partir de um rigoroso diálogo entre volume, iluminação natural e contexto.
            </p>
          </div>

          {/* Interactive Filter Controls */}
          <div className="flex items-center gap-1.5 p-1 bg-[#F4F4F0] border border-[#121314]/8 overflow-x-auto self-start md:self-end">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-medium tracking-wider uppercase whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#121314] text-[#FBFBFA] shadow-xs'
                    : 'text-[#6E706E] hover:text-[#121314]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {filteredProjects.map((project, index) => (
            <article
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer flex flex-col bg-transparent focus-visible:outline-none"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectProject(project);
                }
              }}
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#ECECE6] mb-5">
                <img
                  src={project.image}
                  alt={project.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-105"
                />
                {/* Subtle Hover Action Overlay */}
                <div className="absolute inset-0 bg-[#121314]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-[#FBFBFA] text-[#121314] flex items-center justify-center transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 shadow-md">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Unboxed Metadata & Title */}
              <div className="flex items-center gap-2 text-xs text-[#6E706E] mb-2 font-mono">
                <span>{project.category}</span>
                <span aria-hidden="true">·</span>
                <span>{project.area}</span>
              </div>

              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-display text-xl sm:text-2xl font-semibold text-[#121314] tracking-tight group-hover:text-[#4E5052] transition-colors">
                  {project.name}
                </h3>
                <span className="text-xs font-mono text-[#6E706E]">0{index + 1}</span>
              </div>

              <p className="mt-2 text-sm text-[#4E5052] line-clamp-2 font-light leading-relaxed">
                {project.shortDescription}
              </p>
            </article>
          ))}
        </div>

        {/* Demonstrative Note */}
        <div className="mt-14 pt-6 border-t border-[#121314]/8 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-[#6E706E] gap-2">
          <span>*Projetos demonstrativos elaborados para apresentação do portfólio visual e conceitual da NOVA ARQ.</span>
          <span className="font-mono">Galeria Conceitual · 06 Obras</span>
        </div>
      </div>
    </section>
  );
};
