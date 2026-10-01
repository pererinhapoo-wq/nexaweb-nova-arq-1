import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Processo', href: '#processo' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#121314] text-[#FBFBFA] pt-20 pb-12 border-t border-[#121314]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10 items-start">
          {/* Brand Column */}
          <div className="md:col-span-6 space-y-4">
            <span className="font-display font-bold text-2xl tracking-tight block">
              NOVA ARQ
            </span>
            <p className="text-sm sm:text-base text-white/70 font-light max-w-sm leading-relaxed">
              “Arquitetura que transforma espaços em experiências.”
            </p>
          </div>

          {/* Navigation Links Column */}
          <div className="md:col-span-6 flex flex-col sm:flex-row sm:justify-end gap-8 sm:gap-12">
            <div className="space-y-3">
              <span className="text-[11px] font-mono tracking-widest uppercase text-white/40 block">
                Navegação
              </span>
              <ul className="space-y-2 text-sm text-white/75">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <span className="text-[11px] font-mono tracking-widest uppercase text-white/40 block">
                Atendimento
              </span>
              <p className="text-xs text-white/60 leading-relaxed max-w-[200px]">
                Projetos residenciais e corporativos sob medida.
              </p>
              <div className="pt-2">
                <button
                  onClick={scrollToTop}
                  className="p-2.5 bg-white/5 hover:bg-white/10 text-white rounded transition-colors flex items-center gap-2 text-xs cursor-pointer"
                  aria-label="Voltar ao topo"
                >
                  <ArrowUp className="w-3.5 h-3.5" />
                  <span>Topo</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/40 gap-4">
          <p>© {new Date().getFullYear()} NOVA ARQ. Todos os direitos reservados.</p>
          <p className="font-mono text-[11px]">Arquitetura Contemporânea</p>
        </div>
      </div>
    </footer>
  );
};
