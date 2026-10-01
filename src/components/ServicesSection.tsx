import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SERVICES } from '../data/siteData';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  return (
    <section id="servicos" className="py-24 sm:py-32 bg-[#F4F4F0] border-t border-[#121314]/8">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-[12px] font-semibold tracking-[0.2em] uppercase text-[#6E706E] block mb-3">
            Áreas de Atuação
          </span>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl lg:text-5xl text-[#121314] tracking-tight leading-tight text-balance">
            Arquitetura pensada para cada necessidade.
          </h2>
          <p className="mt-4 text-[#4E5052] text-base sm:text-lg font-light leading-relaxed">
            Abordagem integrada que acompanha desde o planejamento inicial de viabilidade até o detalhamento de acabamentos e marcenaria.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="group bg-[#FBFBFA] p-8 sm:p-10 border border-[#121314]/8 hover:border-[#121314]/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#6E706E] mb-6">
                  <span>0{index + 1}</span>
                  <span className="w-6 h-[1px] bg-[#121314]/15" />
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-semibold text-[#121314] tracking-tight mb-4">
                  {service.title}
                </h3>

                <p className="text-sm text-[#4E5052] font-light leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Scope items */}
                <div className="space-y-2 pt-4 border-t border-[#121314]/8">
                  {service.scope.map((item, idx) => (
                    <div key={idx} className="flex items-baseline text-xs text-[#6E706E]">
                      <span className="mr-2 text-[#121314] font-medium">—</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8 mt-6">
                <button
                  onClick={() => onSelectService(service.title)}
                  className="w-full py-2.5 px-3 text-xs font-semibold tracking-wider uppercase text-[#121314] bg-transparent border border-[#121314]/15 group-hover:bg-[#121314] group-hover:text-[#FBFBFA] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Consultar serviço</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
