import type { Service } from '@/types';
import { SprayCan, Map, Users, Settings, Truck } from 'lucide-react'; // Using SprayCan for Drone

export const services: Service[] = [
  {
    id: 's1',
    name: 'Pulverização com Drone',
    slug: 'pulverizacao-drone',
    icon: SprayCan, // Placeholder for Drone icon
    shortDescription: 'Aplicação precisa de defensivos e nutrientes com tecnologia de drones.',
    longDescription: 'Nossa pulverização com drone oferece precisão milimétrica, acesso a áreas difíceis, economia de insumos e maior segurança operacional. Ideal para diversas culturas, garantindo uma cobertura uniforme e eficaz. Utilizamos drones de última geração e softwares avançados para planejamento e execução dos voos.',
    benefits: ['Alta precisão na aplicação', 'Redução de perdas e amassamento', 'Acesso a terrenos inclinados ou alagados', 'Economia de água e insumos', 'Maior segurança para o aplicador'],
    technologyUsed: ['Drones DJI Agras', 'Software de planejamento de voo', 'GPS RTK para posicionamento'],
    targetCultures: ['Soja', 'Milho', 'Trigo', 'Pastagens', 'Hortifruti'],
    images: ['https://placehold.co/800x450.png', 'https://placehold.co/800x450.png'],
    videoUrl: 'https://www.youtube.com/embed/your_video_id_here',
    dataAiHint: 'drone agriculture',
  },
  {
    id: 's2',
    name: 'Mapeamento Agrícola e Agricultura de Precisão',
    slug: 'mapeamento-agricola',
    icon: Map,
    shortDescription: 'Otimize o uso de insumos e aumente a produtividade com mapas detalhados da sua lavoura.',
    longDescription: 'Realizamos o mapeamento de solo, análise de fertilidade, criação de mapas de produtividade e zonas de manejo. Com dados precisos, você toma decisões mais assertivas, otimiza o uso de fertilizantes e corretivos, e maximiza o potencial produtivo de cada talhão.',
    benefits: ['Uso racional de insumos', 'Aumento da produtividade', 'Identificação de variabilidade na lavoura', 'Manejo localizado e eficiente', 'Redução de custos e impacto ambiental'],
    technologyUsed: ['GPS geodésico', 'Sensores de solo', 'Software de análise de dados (GIS)', 'Imagens de satélite e VANTs'],
    images: ['https://placehold.co/800x450.png'],
    dataAiHint: 'precision farming',
  },
  {
    id: 's3',
    name: 'Consultoria Técnica Especializada',
    slug: 'consultoria-tecnica',
    icon: Users,
    shortDescription: 'Suporte agronômico e veterinário para otimizar sua produção e saúde animal.',
    longDescription: 'Nossa equipe de agrônomos e veterinários experientes está pronta para oferecer consultoria personalizada em manejo de pragas e doenças, recomendação de insumos, nutrição animal, sanidade do rebanho e planejamento produtivo. Visitas técnicas e acompanhamento contínuo para garantir os melhores resultados.',
    benefits: ['Recomendações técnicas embasadas', 'Solução de problemas específicos', 'Aumento da eficiência produtiva', 'Melhoria da saúde e bem-estar animal', 'Acesso a conhecimentos atualizados'],
    images: ['https://placehold.co/800x450.png'],
    dataAiHint: 'agronomist field',
  },
  {
    id: 's4',
    name: 'Assistência Técnica',
    slug: 'assistencia-tecnica',
    icon: Settings,
    shortDescription: 'Suporte pós-venda e manutenção para equipamentos agrícolas.',
    longDescription: 'Oferecemos assistência técnica especializada para os equipamentos e implementos que comercializamos. Conte com nossa equipe para manutenções preventivas, corretivas e fornecimento de peças originais, garantindo a durabilidade e o bom funcionamento de suas máquinas.',
    benefits: ['Rápido atendimento', 'Técnicos qualificados', 'Peças de reposição', 'Aumento da vida útil dos equipamentos'],
    images: ['https://placehold.co/800x450.png'],
    dataAiHint: 'mechanic tractor',
  },
   {
    id: 's5',
    name: 'Entrega de Insumos',
    slug: 'entrega-insumos',
    icon: Truck,
    shortDescription: 'Receba seus insumos diretamente na sua propriedade com agilidade e segurança.',
    longDescription: 'Facilitamos sua logística com nosso serviço de entrega de insumos. Programamos a entrega conforme sua necessidade, garantindo que fertilizantes, sementes, rações e outros produtos cheguem à sua fazenda de forma rápida e segura.',
    benefits: ['Conveniência e praticidade', 'Agilidade na entrega', 'Segurança no transporte', 'Programação flexível'],
    images: ['https://placehold.co/800x450.png'],
    dataAiHint: 'delivery truck farm',
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(service => service.slug === slug);
}
