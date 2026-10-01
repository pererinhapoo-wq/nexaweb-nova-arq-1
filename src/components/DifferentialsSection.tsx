import React from 'react';
import {
  Compass,
  Box,
  Eye,
  Layers,
  Workflow,
  UserCheck
} from 'lucide-react';
import { DIFFERENTIALS } from '../data/siteData';

export const DifferentialsSection: React.FC = () => {
  const icons = [
    Compass,
    Box,
    Eye,
    Layers,
    Workflow,
    UserCheck
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#F4F4F0] border-t border-[#121314]/8">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-[12px] font-semibold tracking-[0.2em] uppercase text-[#6E706E] block mb-3">
            Nossos Diferenciais
          </span>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl lg:text-5xl text-[#121314] tracking-tight leading-tight text-balance">
            Rigor, sensibilidade e método em cada traço.
          </h2>
          <p className="mt-4 text-[#4E5052] text-base sm:text-lg font-light leading-relaxed">
            Fundamentos que orientam nossa prática projetual e asseguram a integridade conceitual e técnica da obra.
          </p>
        </div>

        {/* Differentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DIFFERENTIALS.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={item.title}
                className="bg-[#FBFBFA] p-8 sm:p-10 border border-[#121314]/8 hover:border-[#121314]/25 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 flex items-center justify-center bg-[#F4F4F0] text-[#121314] mb-6">
                    <Icon className="w-5 h-5 stroke-[1.5]" />
                  </div>

                  <h3 className="font-display text-lg sm:text-xl font-semibold text-[#121314] tracking-tight mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#4E5052] font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#121314]/5 flex items-center justify-between text-[11px] font-mono text-[#6E706E]">
                  <span>Pilar 0{index + 1}</span>
                  <span>NOVA ARQ</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
