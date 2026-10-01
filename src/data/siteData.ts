import { ServiceItem, Differential, ProcessStep, Testimonial } from '../types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'residencial',
    title: 'Arquitetura residencial',
    description: 'Concepção de residências unifamiliares contemporâneas personalizadas, priorizando orientação solar, privacidade e vivência familiar.',
    scope: ['Estudo de implantação e terreno', 'Projetos autorais exclusivos', 'Relação entre interior e exterior']
  },
  {
    id: 'corporativo',
    title: 'Arquitetura corporativa',
    description: 'Projetos de sedes, escritórios e ambientes de trabalho pensados para promover colaboração, produtividade e bem-estar.',
    scope: ['Zoneamento acústico e espacial', 'Ergonomia e fluxos operacionais', 'Linguagem alinhada à cultura da marca']
  },
  {
    id: 'interiores',
    title: 'Design de interiores',
    description: 'Composição de layouts, curadoria de materiais nobres, iluminação cênica e mobiliário autoral para espaços memoráveis.',
    scope: ['Paginação de revestimentos', 'Projeto luminotécnico integrado', 'Detalhamento de marcenaria sob medida']
  },
  {
    id: 'reformas',
    title: 'Reformas e ampliações',
    description: 'Transformação e valorização de imóveis existentes através de intervenções estruturais conscientes e ressignificação de ambientes.',
    scope: ['Diagnóstico estrutural e potencial', 'Redistribuição de ambientes', 'Modernização de instalações e acabamentos']
  },
  {
    id: 'projetos-arquitetonicos',
    title: 'Projetos arquitetônicos',
    description: 'Desenvolvimento técnico completo com pranchas executivas, memoriais descritivos e compatibilização interdisciplinar.',
    scope: ['Modelagem tridimensional detalhada', 'Caderno executivo completo', 'Compatibilização técnica de engenharia']
  },
  {
    id: 'consultoria',
    title: 'Consultoria e planejamento',
    description: 'Análise técnica de viabilidade de terrenos, estudo de legislação urbana e direcionamento estratégico para investimentos futuros.',
    scope: ['Viabilidade de ocupação de solo', 'Diretrizes conceituais iniciais', 'Estimativa de etapas e prazos de desenvolvimento']
  }
];

export const DIFFERENTIALS: Differential[] = [
  {
    title: 'Projetos personalizados',
    description: 'Cada proposta nasce a partir de um mergulho cuidadoso na dinâmica e aspirações únicas de cada pessoa ou organização.'
  },
  {
    title: 'Arquitetura contemporânea',
    description: 'Linguagem atemporal marcada por clareza formal, volumes puros, materiais autênticos e diálogo com a luz natural.'
  },
  {
    title: 'Atenção aos detalhes',
    description: 'Rigor milimétrico em encontros de materiais, transições de texturas, paginações e conforto visual.'
  },
  {
    title: 'Integração entre estética e funcionalidade',
    description: 'A beleza arquitetônica concebida como resposta natural à eficiência de uso e fluidez das circulações cotidianas.'
  },
  {
    title: 'Processo organizado',
    description: 'Metodologia estruturada em fases claras, com cronogramas transparentes e entregáveis documentados em cada marco.'
  },
  {
    title: 'Acompanhamento próximo',
    description: 'Comunicação contínua e disponibilidade direta da equipe para alinhamentos em todas as decisões estratégicas do projeto.'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Briefing',
    description: 'Entendimento das necessidades e objetivos.',
    detail: 'Mapeamento detalhado da rotina, desejos programáticos, referências estéticas, condicionantes do lote e orçamento pretendido.'
  },
  {
    number: '02',
    title: 'Conceito',
    description: 'Definição da direção criativa e arquitetônica.',
    detail: 'Elaboração das primeiras diretrizes volumétricas, estudos de insolação, croquis e moodboards de materiais e texturas.'
  },
  {
    number: '03',
    title: 'Projeto',
    description: 'Desenvolvimento das soluções e detalhamento.',
    detail: 'Modelagem dos espaços, definição precisa de plantas baixas, cortes, fachadas e imagens fotorrealistas para validação integral.'
  },
  {
    number: '04',
    title: 'Desenvolvimento',
    description: 'Ajustes, planejamento e preparação para execução.',
    detail: 'Geração dos cadernos executivos com cotas, especificações de fornecedores, pontos elétricos, hidráulicos e marcenaria.'
  },
  {
    number: '05',
    title: 'Entrega',
    description: 'Finalização do projeto e acompanhamento.',
    detail: 'Entrega do dossiê final completo e assistência técnica especializada para esclarecimento de dúvidas durante a obra.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: 'A capacidade da NOVA ARQ de interpretar a nossa rotina e convertê-la em uma casa iluminada e integrada superou todas as nossas expectativas. O equilíbrio entre o concreto e a madeira trouxe exatamente o acolhimento que buscávamos.',
    author: 'Clara & Roberto Mendes',
    role: 'Proprietários',
    projectType: 'Projeto Residencial · 580 m²'
  },
  {
    quote: 'O projeto da nossa sede corporativa transformou a dinâmica da equipe. Ambientes que favorecem a concentração e ao mesmo tempo proporcionam áreas de encontro agradáveis. O rigor técnico nos detalhes foi impecável.',
    author: 'Eduardo Silveira',
    role: 'Diretor de Operações',
    projectType: 'Projeto Corporativo · 450 m²'
  },
  {
    quote: 'Desde o primeiro briefing sentimos que cada decisão tinha um propósito. O processo foi estruturado, sem surpresas, e o resultado final traduz perfeitamente um estilo de vida descomplicado e elegante.',
    author: 'Mariana Vasconcellos',
    role: 'Proprietária',
    projectType: 'Interiores & Reforma · 320 m²'
  }
];
