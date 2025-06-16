import type { NavItem } from '@/types';
import { Home, Info, ShoppingBag, Settings, Tractor, SprayCan, Wheat, Bone, Leaf, MapPinned, Users, Truck, Sparkles, MessageCircle, Rss } from 'lucide-react';

export const mainNavItems: NavItem[] = [
  { label: 'Home', href: '/', icon: Home },
  { label: 'Sobre Nós', href: '/sobre-nos', icon: Info },
  {
    label: 'Produtos',
    href: '/produtos',
    icon: ShoppingBag,
    subItems: [
      { label: 'Insumos para Grãos', href: '/produtos/insumos-graos', icon: Leaf },
      { label: 'Pastagens', href: '/produtos/pastagens', icon: Tractor }, // Using Tractor as proxy for Grass/Pasture
      { label: 'Saúde Animal', href: '/produtos/saude-animal', icon: Bone },
      { label: 'Defensivos Agrícolas', href: '/produtos/defensivos-agricolas', icon: SprayCan },
      { label: 'Rações', href: '/produtos/racoes', icon: Wheat },
      { label: 'Pet Shop', href: '/produtos/pet-shop', icon: Bone }, // Re-using Bone, could be PawPrint if available
      { label: 'Equipamentos', href: '/produtos/equipamentos', icon: Settings },
    ],
  },
  {
    label: 'Serviços',
    href: '/servicos',
    icon: Sparkles, // Sparkles for general services
    subItems: [
      { label: 'Pulverização com Drone', href: '/servicos/pulverizacao-drone', icon: SprayCan }, // Using Drone icon if available, else SprayCan
      { label: 'Mapeamento Agrícola', href: '/servicos/mapeamento-agricola', icon: MapPinned },
      { label: 'Consultoria Técnica', href: '/servicos/consultoria-tecnica', icon: Users },
      { label: 'Assistência Técnica', href: '/servicos/assistencia-tecnica', icon: Settings },
      { label: 'Entrega de Insumos', href: '/servicos/entrega-insumos', icon: Truck },
    ],
  },
  { label: 'Blog', href: '/blog', icon: Rss },
  { label: 'Contato', href: '/contato', icon: MessageCircle },
];

export const productCategoriesData: NavItem[] = mainNavItems.find(item => item.label === 'Produtos')?.subItems || [];
export const serviceCategoriesData: NavItem[] = mainNavItems.find(item => item.label === 'Serviços')?.subItems || [];
