import type { Product, ProductCategory } from '@/types';
import { Leaf, Tractor, Bone, SprayCan, Wheat, Settings, ShoppingBag } from 'lucide-react'; // ShoppingBag for PetShop

export const productCategories: ProductCategory[] = [
  { id: '1', name: 'Insumos para Grãos', slug: 'insumos-graos', icon: Leaf, description: 'Sementes, fertilizantes, corretivos e mais para suas lavouras.', image: 'https://placehold.co/400x300.png', dataAiHint: 'seeds grain' },
  { id: '2', name: 'Pastagens', slug: 'pastagens', icon: Tractor, description: 'Sementes e suplementos para pastagens de alta performance.', image: 'https://placehold.co/400x300.png', dataAiHint: 'pasture field' },
  { id: '3', name: 'Saúde Animal', slug: 'saude-animal', icon: Bone, description: 'Medicamentos, vacinas e suplementos para bovinos, suínos, aves e outros.', image: 'https://placehold.co/400x300.png', dataAiHint: 'veterinary medicine' },
  { id: '4', name: 'Defensivos Agrícolas', slug: 'defensivos-agricolas', icon: SprayCan, description: 'Herbicidas, fungicidas e inseticidas para proteção de cultivos.', image: 'https://placehold.co/400x300.png', dataAiHint: 'pesticide application' },
  { id: '5', name: 'Rações', slug: 'racoes', icon: Wheat, description: 'Rações balanceadas para gado, aves, suínos e outras espécies.', image: 'https://placehold.co/400x300.png', dataAiHint: 'animal feed' },
  { id: '6', name: 'Pet Shop', slug: 'pet-shop', icon: ShoppingBag, description: 'Alimentos, acessórios e medicamentos para cães e gatos.', image: 'https://placehold.co/400x300.png', dataAiHint: 'pet supplies' },
  { id: '7', name: 'Equipamentos', slug: 'equipamentos', icon: Settings, description: 'Ferramentas, implementos e peças para o dia a dia no campo.', image: 'https://placehold.co/400x300.png', dataAiHint: 'farm tools' },
];

export const products: Product[] = [
  // Insumos para Grãos
  {
    id: 'p1', name: 'Semente de Milho Híbrido AG8088', slug: 'semente-milho-ag8088', brand: 'Agroceres', categorySlug: 'insumos-graos',
    images: ['https://placehold.co/600x400.png', 'https://placehold.co/600x400.png'], dataAiHint: 'corn seed',
    shortDescription: 'Milho híbrido de alto potencial produtivo, ciclo precoce e excelente sanidade foliar.',
    detailedDescription: 'O AG8088 PRO3 é um híbrido precoce com alto potencial produtivo, estabilidade e ampla adaptação. Sua arquitetura de planta moderna e porte médio facilitam o manejo. Apresenta excelente qualidade de grãos e colmo, além de boa sanidade foliar.',
    specifications: [{ key: 'Ciclo', value: 'Precoce' }, { key: 'Tecnologia', value: 'PRO3' }],
    availablePackages: ['Saco 20kg', 'Saco 60.000 sementes'],
    downloads: [{ name: 'Ficha Técnica Milho AG8088', url: '/downloads/milho-ag8088.pdf' }],
  },
  {
    id: 'p2', name: 'Fertilizante NPK 10-20-20', slug: 'fertilizante-npk-10-20-20', brand: 'Yara', categorySlug: 'insumos-graos',
    images: ['https://placehold.co/600x400.png'], dataAiHint: 'fertilizer bag',
    shortDescription: 'Fertilizante granulado com formulação balanceada para diversas culturas.',
    detailedDescription: 'Formulação NPK equilibrada, ideal para aplicação em base em culturas como soja, milho e feijão. Garante um fornecimento adequado de nutrientes essenciais para o desenvolvimento inicial das plantas.',
    availablePackages: ['Saco 50kg', 'Big Bag 1 tonelada'],
  },
  // Saúde Animal
  {
    id: 'p3', name: 'Vermífugo Ivermectina 1%', slug: 'vermifugo-ivermectina-1', brand: 'Ourofino', categorySlug: 'saude-animal',
    images: ['https://placehold.co/600x400.png'], dataAiHint: 'cattle medicine',
    shortDescription: 'Endectocida injetável para bovinos, eficaz contra vermes e parasitas externos.',
    detailedDescription: 'Indicado para o tratamento e controle de parasitas internos e externos em bovinos. Amplo espectro de ação. Recomenda-se orientação veterinária.',
    availablePackages: ['Frasco 50ml', 'Frasco 500ml'],
    downloads: [{ name: 'Bula Ivermectina 1%', url: '/downloads/bula-ivermectina.pdf' }],
  },
  {
    id: 'p4', name: 'Vacina Raiva Bovina', slug: 'vacina-raiva-bovina', brand: 'Zoetis', categorySlug: 'saude-animal',
    images: ['https://placehold.co/600x400.png'], dataAiHint: 'vaccine vial',
    shortDescription: 'Vacina para prevenção da raiva em bovinos e outros herbívoros.',
    detailedDescription: 'Vacina inativada para a profilaxia da raiva dos herbívoros. Aplicar conforme recomendação do médico veterinário e calendário de vacinação local.',
    availablePackages: ['Dose individual', 'Frasco multidoses'],
  },
  // Pet Shop
  {
    id: 'p5', name: 'Ração Premium Cães Adultos', slug: 'racao-premium-caes-adultos', brand: 'Pedigree', categorySlug: 'pet-shop',
    images: ['https://placehold.co/600x400.png'], dataAiHint: 'dog food',
    shortDescription: 'Alimento completo e balanceado para cães adultos de todas as raças.',
    detailedDescription: 'Formulada com ingredientes de alta qualidade, promove saúde e vitalidade para cães adultos. Contém vitaminas e minerais essenciais.',
    availablePackages: ['Saco 3kg', 'Saco 15kg'],
  },
];

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter(product => product.categorySlug === categorySlug);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(product => product.slug === slug);
}

export function getCategoryBySlug(slug: string): ProductCategory | undefined {
  return productCategories.find(category => category.slug === slug);
}
