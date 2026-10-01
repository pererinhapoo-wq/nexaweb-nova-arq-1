import React from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import heroImg from '../assets/images/hero_architecture_1790883865890.jpg';

interface HeroProps {
  onExploreProjects: () => void;
  onTalkToArchitect: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProjects, onTalkToArchitect }) => {
  return (
    <section id="inicio" className="relative pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-44 lg:pb-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Editorial Top Lockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-12 lg:mb-16">
          <div className="lg:col-span-8">
            <span className="text-[12px] font-semibold tracking-[0.2em] uppercase text-[#6E706E] block mb-4">
              Estúdio de Arquitetura Contemporânea
            </span>
            <h1 className="font-display font-semibold text-3xl sm:text-5xl lg:text-6xl xl:text-[4rem] text-[#121314] leading-[1.08] tracking-[-0.03em] max-w-4xl text-balance">
              Arquitetura que transforma espaços em experiências.
            </h1>
          </div>

          <div className="lg:col-span-4 lg:pb-2">
            <p className="text-[#4E5052] text-base sm:text-lg leading-relaxed mb-6 font-light max-w-md">
              Projetamos espaços contemporâneos, funcionais e pensados para a forma como você vive e trabalha.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={onExploreProjects}
                className="px-6 py-3 text-xs font-semibold tracking-wider uppercase text-[#FBFBFA] bg-[#121314] hover:bg-[#252729] active:scale-[0.98] transition-all duration-200 flex items-center gap-2 cursor-pointer shadow-sm"
              >
                <span>Conheça nossos projetos</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={onTalkToArchitect}
                className="px-6 py-3 text-xs font-semibold tracking-wider uppercase text-[#121314] bg-transparent border border-[#121314]/20 hover:border-[#121314] hover:bg-[#121314]/5 active:scale-[0.98] transition-all duration-200 flex items-center gap-2 cursor-pointer"
              >
                <span>Fale com um arquiteto</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Large Architectural Hero Visual Container */}
        <div className="relative group w-full overflow-hidden bg-[#ECECE6]">
          <div className="relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden">
            <img
              src={heroImg}
              alt="Projeto arquitetônico contemporâneo com planos de concreto e grandes panos de vidro"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center transform transition-transform duration-1000 ease-out group-hover:scale-[1.02]"
            />
            {/* Subtle Gradient Scrim for subtle depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#121314]/60 via-transparent to-transparent pointer-events-none" />

            {/* Bottom Caption Overlay */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-8 flex flex-col sm:flex-row items-start sm:items-end justify-between text-white gap-2 pointer-events-none">
              <div>
                <span className="text-[11px] font-mono tracking-widest uppercase opacity-75 block mb-1">
                  Direção Arquitetônica
                </span>
                <p className="font-display text-lg sm:text-2xl font-medium tracking-tight">
                  Diálogo entre luz, matéria e permanência
                </p>
              </div>
              <div className="text-[12px] opacity-80 font-mono tracking-wider sm:text-right">
                Residencial & Corporativo · 2026
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
