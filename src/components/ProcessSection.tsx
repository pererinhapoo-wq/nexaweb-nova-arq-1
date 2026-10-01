import React from 'react';
import { PROCESS_STEPS } from '../data/siteData';

export const ProcessSection: React.FC = () => {
  return (
    <section id="processo" className="py-24 sm:py-32 bg-[#FBFBFA] border-t border-[#121314]/8">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 sm:mb-20">
          <span className="text-[12px] font-semibold tracking-[0.2em] uppercase text-[#6E706E] block mb-3">
            Metodologia
          </span>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl lg:text-5xl text-[#121314] tracking-tight leading-tight text-balance">
            Do conceito ao espaço.
          </h2>
          <p className="mt-4 text-[#4E5052] text-base sm:text-lg font-light leading-relaxed">
            Uma trajetória clara e transparente dividida em etapas sucessivas, garantindo previsibilidade e excelência em cada decisão.
          </p>
        </div>

        {/* Process Steps Timeline */}
        <div className="relative border-t border-[#121314]/15">
          <div className="grid grid-cols-1 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-[#121314]/10">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.number}
                className="py-8 md:py-10 md:px-6 first:pl-0 last:pr-0 group flex flex-col justify-between"
              >
                <div>
                  <div className="font-mono text-2xl lg:text-3xl font-light text-[#121314] mb-6 flex items-center justify-between">
                    <span>{step.number}</span>
                    <span className="text-xs uppercase tracking-widest text-[#6E706E] font-sans md:hidden">
                      Fase {step.number}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-semibold text-[#121314] tracking-tight mb-2">
                    {step.title}
                  </h3>

                  <p className="text-sm font-medium text-[#121314] mb-3">
                    {step.description}
                  </p>

                  <p className="text-xs text-[#6E706E] font-light leading-relaxed">
                    {step.detail}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#121314]/5">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#6E706E]">
                    Etapa 0{step.number.replace('0', '')} / 05
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
