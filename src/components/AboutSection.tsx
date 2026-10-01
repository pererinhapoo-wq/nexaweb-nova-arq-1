import React from 'react';
import aboutImage from '../assets/images/proj_residencia_aurea_1790883886644.jpg';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="py-24 sm:py-32 bg-[#FBFBFA] border-t border-[#121314]/8">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Column */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#ECECE6]">
              <img
                src={aboutImage}
                alt="Detalhe arquitetônico de pátio interno com luz filtrada por brises e vegetação"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-[#FBFBFA]/90 backdrop-blur-sm p-4 text-xs font-mono text-[#6E706E] border border-[#121314]/5">
                <span>Conexão essencial entre luz natural, ventilação e matéria.</span>
              </div>
            </div>
          </div>

          {/* Text Editorial Column */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <span className="text-[12px] font-semibold tracking-[0.2em] uppercase text-[#6E706E] block">
              Sobre a NOVA ARQ
            </span>

            <h2 className="font-display font-semibold text-3xl sm:text-4xl lg:text-5xl text-[#121314] tracking-tight leading-[1.12] text-balance">
              Espaços com identidade, propósito e equilíbrio.
            </h2>

            <div className="space-y-5 text-[#4E5052] text-base sm:text-lg font-light leading-relaxed">
              <p>
                A NOVA ARQ desenvolve projetos que unem arquitetura, funcionalidade e estética. Cada espaço é pensado de forma personalizada, considerando as necessidades, a rotina e a identidade de quem irá utilizá-lo.
              </p>
              <p>
                Acreditamos em uma arquitetura sensível e duradoura, onde o traço contemporâneo não responde a modismos passageiros, mas à busca contínua por conforto, inteligência espacial e harmonia com o entorno.
              </p>
            </div>

            {/* Architecture Principles Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-[#121314]/8">
              <div>
                <span className="text-xs font-mono text-[#6E706E] block mb-1">01 / Identidade</span>
                <p className="text-sm font-medium text-[#121314]">Respeito à singularidade de cada morador ou organização.</p>
              </div>
              <div>
                <span className="text-xs font-mono text-[#6E706E] block mb-1">02 / Propósito</span>
                <p className="text-sm font-medium text-[#121314]">Decisões projetuais pautadas na eficiência do uso diário.</p>
              </div>
              <div>
                <span className="text-xs font-mono text-[#6E706E] block mb-1">03 / Equilíbrio</span>
                <p className="text-sm font-medium text-[#121314]">Harmonia entre luz, vazios, materiais naturais e escala humana.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
