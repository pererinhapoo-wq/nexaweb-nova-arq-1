import React, { useEffect } from 'react';
import { X, ArrowUpRight, Maximize2, Compass, Layers } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onRequestSimilar: (projectName: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onRequestSimilar,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-[#121314]/70 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto bg-[#FBFBFA] shadow-2xl border border-[#121314]/10 focus:outline-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#FBFBFA]/95 backdrop-blur border-b border-[#121314]/8">
          <div className="flex items-center gap-3 text-xs tracking-wider uppercase text-[#6E706E]">
            <span className="font-semibold text-[#121314]">{project.category}</span>
            <span aria-hidden="true">·</span>
            <span>Estudo de Projeto</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#121314] hover:bg-[#121314]/5 rounded transition-colors cursor-pointer"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 lg:p-10 space-y-8">
          {/* Main Visual */}
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#ECECE6]">
            <img
              src={project.image}
              alt={project.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Title & Metadata */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-4">
              <h2
                id="modal-project-title"
                className="font-display text-2xl sm:text-4xl text-[#121314] font-semibold tracking-tight"
              >
                {project.name}
              </h2>
              <p className="text-[#4E5052] text-base sm:text-lg leading-relaxed font-light">
                {project.concept}
              </p>

              <div className="pt-4 border-t border-[#121314]/8">
                <h4 className="text-xs font-semibold tracking-widest uppercase text-[#6E706E] mb-2">
                  Destaque Construtivo
                </h4>
                <p className="text-sm text-[#121314]">{project.highlight}</p>
              </div>
            </div>

            {/* Project Specs Side Column */}
            <div className="lg:col-span-4 bg-[#F4F4F0] p-6 space-y-5 border border-[#121314]/5">
              <div>
                <span className="text-[11px] font-mono tracking-widest uppercase text-[#6E706E] block mb-1">
                  Área Construída
                </span>
                <span className="font-display text-xl font-semibold text-[#121314]">
                  {project.area}
                </span>
              </div>

              <div>
                <span className="text-[11px] font-mono tracking-widest uppercase text-[#6E706E] block mb-1">
                  Tipologia
                </span>
                <span className="text-sm font-medium text-[#121314]">
                  {project.category} Contemporâneo
                </span>
              </div>

              <div className="pt-4 border-t border-[#121314]/8">
                <button
                  onClick={() => {
                    onClose();
                    onRequestSimilar(project.name);
                  }}
                  className="w-full py-3 px-4 text-xs font-semibold tracking-wider uppercase text-[#FBFBFA] bg-[#121314] hover:bg-[#252729] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <span>Solicitar proposta similar</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <p className="text-[11px] text-[#6E706E] leading-snug">
                *Projeto ilustrativo para demonstração de linguagem formal e espacial da NOVA ARQ.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
