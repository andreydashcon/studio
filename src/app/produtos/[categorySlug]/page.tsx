import { notFound } from 'next/navigation';
import { getProductsByCategory, getCategoryBySlug, productCategories } from '@/data/products';
import ProductCard from '@/components/products/ProductCard';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

type Props = {
  params: { categorySlug: string };
};

export async function generateStaticParams() {
  return productCategories.map((category) => ({
    categorySlug: category.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = getCategoryBySlug(params.categorySlug);
  if (!category) {
    return {
      title: 'Categoria não encontrada',
      description: 'A categoria de produtos que você está procurando não foi encontrada.',
    };
  }
  return {
    title: `${category.name} - Produtos - AgroConnect SC`,
    description: category.description || `Explore nossos produtos na categoria ${category.name}.`,
  };
}

export default function ProductCategoryPage({ params }: Props) {
  const { categorySlug } = params;
  const category = getCategoryBySlug(categorySlug);
  const productsInCategory = getProductsByCategory(categorySlug);

  if (!category) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8 md:px-6 md:py-12">
      <header className="mb-10">
        <div className="flex items-center text-sm text-foreground/70 mb-2">
          <Link href="/produtos" className="hover:text-primary">Produtos</Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <span className="font-medium text-primary">{category.name}</span>
        </div>
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-3">{category.name}</h1>
        {category.description && (
          <p className="text-lg text-foreground/80 max-w-2xl">{category.description}</p>
        )}
      </header>

      {productsInCategory.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {productsInCategory.map((product) => (
            <ProductCard key={product.id} product={product} categorySlug={categorySlug} />
          ))}
        </div>
      ) : (
        <div className="text-center py-10">
          <p className="text-xl text-foreground/70">Nenhum produto encontrado nesta categoria no momento.</p>
          <Link href="/produtos" className="mt-4 inline-block text-accent hover:underline">
            Ver todas as categorias
          </Link>
        </div>
      )}
    </div>
  );
}
