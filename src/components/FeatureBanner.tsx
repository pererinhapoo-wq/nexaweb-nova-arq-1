import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import featureImg from '../assets/images/feature_espaco_ideia_1790883905363.jpg';

interface FeatureBannerProps {
  onStartProject: () => void;
}

export const FeatureBanner: React.FC<FeatureBannerProps> = ({ onStartProject }) => {
  return (
    <section className="relative w-full py-28 sm:py-36 lg:py-44 overflow-hidden bg-[#121314] text-white">
      {/* Background Architectural Image with Cinematic Treatment */}
      <div className="absolute inset-0 z-0">
        <img
          src={featureImg}
          alt="Monolito arquitetônico contemporâneo com planos curvos de concreto"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover opacity-45 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121314] via-[#121314]/40 to-[#121314]/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center flex flex-col items-center">
        <span className="text-[12px] font-mono tracking-[0.25em] uppercase text-white/70 mb-4 block">
          Pausa Arquitetônica · Concepção
        </span>

        <h2 className="font-display font-semibold text-3xl sm:text-5xl lg:text-6xl max-w-3xl tracking-tight leading-[1.1] mb-8 text-balance">
          Cada espaço começa com uma ideia.
        </h2>

        <p className="max-w-xl text-base sm:text-lg text-white/80 font-light leading-relaxed mb-10">
          Transformamos visões e aspirações em projetos com precisão geométrica, sensibilidade material e identidade singular.
        </p>

        <button
          onClick={onStartProject}
          className="px-8 py-3.5 text-xs font-semibold tracking-wider uppercase text-[#121314] bg-[#FBFBFA] hover:bg-white active:scale-[0.98] transition-all duration-200 flex items-center gap-2 cursor-pointer shadow-lg"
        >
          <span>Começar um projeto</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
