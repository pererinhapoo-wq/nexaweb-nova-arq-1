import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, Send, MessageSquare, Clock, MapPin } from 'lucide-react';

interface ContactSectionProps {
  preselectedService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ preselectedService }) => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    tipoProjeto: preselectedService || 'Residencial',
    mensagem: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Update selected service if preselectedService changes
  React.useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, tipoProjeto: preselectedService }));
    }
  }, [preselectedService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate real smooth submission response
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      nome: '',
      email: '',
      telefone: '',
      tipoProjeto: 'Residencial',
      mensagem: '',
    });
    setSubmitted(false);
  };

  return (
    <section id="contato" className="py-24 sm:py-32 bg-[#F4F4F0] border-t border-[#121314]/8">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* 10. CTA Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-[12px] font-semibold tracking-[0.2em] uppercase text-[#6E706E] block mb-3">
            Inicie Seu Projeto
          </span>
          <h2 className="font-display font-semibold text-3xl sm:text-5xl lg:text-6xl text-[#121314] tracking-tight leading-[1.08] mb-6 text-balance">
            Vamos transformar sua ideia em espaço?
          </h2>
          <p className="text-[#4E5052] text-base sm:text-lg font-light leading-relaxed max-w-2xl">
            Conte-nos sobre seu projeto e descubra como podemos transformar suas ideias em uma experiência arquitetônica.
          </p>
        </div>

        {/* 11. CONTATO Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Side Info: "Fale com a NOVA ARQ" */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#FBFBFA] p-8 sm:p-10 border border-[#121314]/8 space-y-6">
              <div>
                <h3 className="font-display text-2xl font-semibold text-[#121314] tracking-tight mb-2">
                  Fale com a NOVA ARQ
                </h3>
                <p className="text-base text-[#4E5052] font-light leading-relaxed">
                  Estamos prontos para entender seu projeto.
                </p>
              </div>

              <div className="space-y-4 pt-6 border-t border-[#121314]/8 text-sm text-[#4E5052]">
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#121314] mt-0.5 shrink-0" />
                  <div>
                    <span className="font-medium text-[#121314] block">Reuniões e Consultorias</span>
                    <span className="text-xs text-[#6E706E]">Atendimentos mediante agendamento prévio com a equipe de arquitetura.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MessageSquare className="w-4 h-4 text-[#121314] mt-0.5 shrink-0" />
                  <div>
                    <span className="font-medium text-[#121314] block">Retorno de Propostas</span>
                    <span className="text-xs text-[#6E706E]">Análise preliminar de viabilidade e contato inicial em até 48 horas úteis.</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-[#F4F4F0] border border-[#121314]/5 text-xs text-[#6E706E] leading-relaxed">
                Cada novo estudo arquitetônico inicia-se com uma escuta ativa sobre hábitos, contexto e objetivos específicos.
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7 bg-[#FBFBFA] p-8 sm:p-12 border border-[#121314]/8">
            {submitted ? (
              <div className="py-12 text-center space-y-5 animate-in fade-in duration-300">
                <div className="w-14 h-14 mx-auto rounded-full bg-[#121314] text-[#FBFBFA] flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="font-display text-2xl font-semibold text-[#121314]">
                  Solicitação recebida com sucesso
                </h4>
                <p className="text-sm text-[#4E5052] max-w-md mx-auto font-light leading-relaxed">
                  Obrigado, <strong className="font-medium text-[#121314]">{formData.nome}</strong>. Nossa equipe analisará os detalhes do seu projeto de tipologia <strong className="font-medium text-[#121314]">{formData.tipoProjeto}</strong> e entrará em contato em breve.
                </p>
                <div className="pt-4">
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 text-xs font-semibold tracking-wider uppercase text-[#121314] border border-[#121314]/20 hover:border-[#121314] transition-colors cursor-pointer"
                  >
                    Enviar nova mensagem
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="nome" className="block text-xs font-semibold tracking-wider uppercase text-[#121314] mb-2">
                    Nome Completo *
                  </label>
                  <input
                    id="nome"
                    type="text"
                    required
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    placeholder="Seu nome"
                    className="w-full px-4 py-3 bg-[#F4F4F0] border border-[#121314]/10 focus:border-[#121314] focus:bg-white text-sm text-[#121314] outline-none transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold tracking-wider uppercase text-[#121314] mb-2">
                      E-mail *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="seuemail@exemplo.com"
                      className="w-full px-4 py-3 bg-[#F4F4F0] border border-[#121314]/10 focus:border-[#121314] focus:bg-white text-sm text-[#121314] outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="telefone" className="block text-xs font-semibold tracking-wider uppercase text-[#121314] mb-2">
                      Telefone / WhatsApp *
                    </label>
                    <input
                      id="telefone"
                      type="tel"
                      required
                      value={formData.telefone}
                      onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                      placeholder="(11) 99999-9999"
                      className="w-full px-4 py-3 bg-[#F4F4F0] border border-[#121314]/10 focus:border-[#121314] focus:bg-white text-sm text-[#121314] outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="tipoProjeto" className="block text-xs font-semibold tracking-wider uppercase text-[#121314] mb-2">
                    Tipo de Projeto *
                  </label>
                  <select
                    id="tipoProjeto"
                    value={formData.tipoProjeto}
                    onChange={(e) => setFormData({ ...formData, tipoProjeto: e.target.value })}
                    className="w-full px-4 py-3 bg-[#F4F4F0] border border-[#121314]/10 focus:border-[#121314] focus:bg-white text-sm text-[#121314] outline-none transition-colors cursor-pointer"
                  >
                    <option value="Residencial">Arquitetura residencial</option>
                    <option value="Corporativo">Arquitetura corporativa</option>
                    <option value="Design de interiores">Design de interiores</option>
                    <option value="Reformas e ampliações">Reformas e ampliações</option>
                    <option value="Projetos arquitetônicos">Projetos arquitetônicos completos</option>
                    <option value="Consultoria e planejamento">Consultoria e planejamento</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="mensagem" className="block text-xs font-semibold tracking-wider uppercase text-[#121314] mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="mensagem"
                    required
                    rows={4}
                    value={formData.mensagem}
                    onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                    placeholder="Conte-nos brevemente sobre o terreno, metragem pretendida, localização aproximada e principais expectativas..."
                    className="w-full px-4 py-3 bg-[#F4F4F0] border border-[#121314]/10 focus:border-[#121314] focus:bg-white text-sm text-[#121314] outline-none transition-colors resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 px-6 text-xs font-semibold tracking-wider uppercase text-[#FBFBFA] bg-[#121314] hover:bg-[#252729] active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-md disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Enviando solicitação...</span>
                    ) : (
                      <>
                        <span>Enviar solicitação</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>

                <p className="text-[11px] text-[#6E706E] text-center">
                  Garantimos a privacidade dos dados informados para fins exclusivos de contato preliminar.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
