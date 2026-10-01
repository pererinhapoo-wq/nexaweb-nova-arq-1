import React from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/siteData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#FBFBFA] border-t border-[#121314]/8">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-2xl mb-16 sm:mb-20">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-[12px] font-semibold tracking-[0.2em] uppercase text-[#6E706E]">
              Perspectivas & Experiências
            </span>
            <span className="text-[11px] font-mono text-[#6E706E]/75 border-l border-[#121314]/15 pl-3">
              (Conteúdo demonstrativo para apresentação de layout)
            </span>
          </div>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl lg:text-5xl text-[#121314] tracking-tight leading-tight text-balance">
            A vivência do espaço na visão de quem habita.
          </h2>
        </div>

        {/* Testimonials 3 Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, index) => (
            <div
              key={index}
              className="bg-[#F4F4F0] p-8 sm:p-10 border border-[#121314]/6 flex flex-col justify-between"
            >
              <div>
                <Quote className="w-6 h-6 text-[#121314]/30 mb-6 stroke-[1.2]" />
                <p className="text-sm sm:text-base text-[#121314] font-light leading-relaxed mb-8 italic">
                  “{item.quote}”
                </p>
              </div>

              <div className="pt-6 border-t border-[#121314]/10">
                <div className="font-display text-base font-semibold text-[#121314]">
                  {item.author}
                </div>
                <div className="text-xs text-[#6E706E] flex items-center gap-2 mt-1">
                  <span>{item.role}</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono text-[11px]">{item.projectType}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-xs text-[#6E706E] italic">
            *Depoimentos fictícios inseridos exclusivamente para ilustração da diagramação e apresentação visual do site.
          </p>
        </div>
      </div>
    </section>
  );
};
