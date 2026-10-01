import { Project } from '../types';

import imgCasaHorizonte from '../assets/images/proj_casa_horizonte_1790883876712.jpg';
import imgResidenciaAurea from '../assets/images/proj_residencia_aurea_1790883886644.jpg';
import imgEscritorioLinha from '../assets/images/proj_escritorio_linha_1790883905363.jpg';
import imgEspacoOrbe from '../assets/images/feature_espaco_ideia_1790883905363.jpg';
import imgVillaContemporanea from '../assets/images/hero_architecture_1790883865890.jpg';
import imgCorporateInterior from '../assets/images/proj_escritorio_linha_1790883896492.jpg';

export const PROJECTS: Project[] = [
  {
    id: 'casa-horizonte',
    name: 'Casa Horizonte',
    category: 'Residencial',
    shortDescription: 'Planos horizontais contínuos integrados à paisagem e ao espelho d’água.',
    concept: 'Composição de volumes em balanço e fechamentos em vidro do chão ao teto, criando transição fluida entre ambientes internos e a linha do horizonte.',
    image: imgCasaHorizonte,
    area: '620 m²',
    highlight: 'Integração visual e luz natural zenital'
  },
  {
    id: 'residencia-aurea',
    name: 'Residência Áurea',
    category: 'Residencial',
    shortDescription: 'Equilíbrio térmico e iluminação poética através de brises verticais em madeira nobre.',
    concept: 'Um pátio central verde organiza os fluxos da residência, promovendo ventilação cruzada constante e privacidade em relação à malha urbana.',
    image: imgResidenciaAurea,
    area: '480 m²',
    highlight: 'Pátio interno com biofilia e conforto térmico passivo'
  },
  {
    id: 'casa-nexo',
    name: 'Casa Nexo',
    category: 'Residencial',
    shortDescription: 'Articulação entre concreto aparente, planos suspensos e jardins suspensos.',
    concept: 'A conexão entre áreas sociais e de repouso é mediada por uma passarela envidraçada que emoldura a vegetação circundante.',
    image: imgVillaContemporanea,
    area: '540 m²',
    highlight: 'Estrutura em concreto aparente e balanços arrojados'
  },
  {
    id: 'villa-contemporanea',
    name: 'Villa Contemporânea',
    category: 'Residencial',
    shortDescription: 'Arquitetura de linhas puras e presença escultórica em topografia inclinada.',
    concept: 'Desenvolvida em três níveis escalonados para preservar o relevo original do terreno, maximizando a insolação e a contemplação panorâmica.',
    image: imgVillaContemporanea,
    area: '750 m²',
    highlight: 'Adaptação topográfica e terraços integrados'
  },
  {
    id: 'espaco-orbe',
    name: 'Espaço Orbe',
    category: 'Interiores',
    shortDescription: 'Curvaturas orgânicas e atmosfera contemplativa para convivência e arte.',
    concept: 'Superfícies minerais contínuas e iluminação indireta proporcionam uma desaceleração sensorial e fluidez espacial refinada.',
    image: imgEspacoOrbe,
    area: '310 m²',
    highlight: 'Linguagem monolítica e texturas táteis'
  },
  {
    id: 'escritorio-linha',
    name: 'Escritório Linha',
    category: 'Corporativo',
    shortDescription: 'Ambiente corporativo contemporâneo focado em clareza espacial e produtividade.',
    concept: 'Divisórias em vidro canelado e marcenaria minimalista criam zonas de foco privativas sem romper a sensação de amplitude do conjunto.',
    image: imgCorporateInterior,
    area: '420 m²',
    highlight: 'Acústica de alto desempenho e flexibilidade modular'
  }
];
