import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getProductBySlug, getCategoryBySlug, products as allProducts } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Download, Info, ListChecks, Package, Tag, ChevronRight } from 'lucide-react';
import AiProductRecommendations from '@/components/products/AiProductRecommendations';
import type { ProductRecommendationInput } from '@/ai/flows/product-recommendation';
import type { Metadata } from 'next';
import Link from 'next/link';

type Props = {
  params: { categorySlug: string; productSlug: string };
};

export async function generateStaticParams() {
  return allProducts.map((product) => ({
    categorySlug: product.categorySlug,
    productSlug: product.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = getProductBySlug(params.productSlug);
  if (!product) {
    return {
      title: 'Produto não encontrado',
      description: 'O produto que você está procurando não foi encontrado.',
    };
  }
  const category = getCategoryBySlug(product.categorySlug);
  return {
    title: `${product.name} - ${category?.name || 'Produtos'} - AgroConnect SC`,
    description: product.shortDescription,
  };
}

export default function ProductDetailPage({ params }: Props) {
  const { categorySlug, productSlug } = params;
  const product = getProductBySlug(productSlug);
  const category = getCategoryBySlug(categorySlug);

  if (!product || product.categorySlug !== categorySlug) {
    notFound();
  }

  const recommendationInput: ProductRecommendationInput = {
    productName: product.name,
    productDescription: product.detailedDescription || product.shortDescription,
    category: category?.name || 'Geral',
  };

  return (
    <div className="container mx-auto px-4 py-8 md:px-6 md:py-12">
      <header className="mb-8">
        <div className="flex items-center text-sm text-foreground/70 mb-2">
          <Link href="/produtos" className="hover:text-primary">Produtos</Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          {category && <Link href={`/produtos/${category.slug}`} className="hover:text-primary">{category.name}</Link>}
          <ChevronRight className="h-4 w-4 mx-1" />
          <span className="font-medium text-primary">{product.name}</span>
        </div>
        <h1 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold text-primary">{product.name}</h1>
        {product.brand && <p className="text-lg text-accent mt-1">Marca: {product.brand}</p>}
      </header>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        <div>
          <Card className="shadow-lg overflow-hidden">
            <div className="relative w-full aspect-[4/3]">
              <Image
                src={product.images[0] || 'https://placehold.co/800x600.png'}
                alt={product.name}
                layout="fill"
                objectFit="contain" // Use 'contain' to show full image, 'cover' to fill
                className="bg-gray-100"
                data-ai-hint={product.dataAiHint || 'product photo'}
              />
            </div>
            {/* TODO: Add image gallery for multiple images */}
          </Card>
          {product.downloads && product.downloads.length > 0 && (
            <Card className="mt-6 shadow-md">
              <CardHeader>
                <CardTitle className="font-headline text-xl text-primary flex items-center">
                  <Download className="mr-2 h-5 w-5 text-accent" /> Downloads
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {product.downloads.map(doc => (
                    <li key={doc.name}>
                      <a 
                        href={doc.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-accent hover:underline flex items-center"
                      >
                        <Download className="mr-2 h-4 w-4" /> {doc.name} (PDF)
                      </a>
                    </li>
                  ))}
                </ul>
                 <p className="text-xs text-muted-foreground mt-3">Importante: Leia atentamente as informações técnicas e bulas antes de usar qualquer produto. Em caso de dúvidas, consulte um profissional.</p>
              </CardContent>
            </Card>
          )}
        </div>

        <div>
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-primary flex items-center">
                <Info className="mr-2 h-6 w-6 text-accent" /> Detalhes do Produto
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg text-foreground/80">{product.shortDescription}</p>
              {product.detailedDescription && (
                <div className="prose prose-sm max-w-none text-foreground/90" dangerouslySetInnerHTML={{ __html: product.detailedDescription.replace(/\n/g, '<br />') }} />
              )}
              
              {product.specifications && product.specifications.length > 0 && (
                <div>
                  <h3 className="font-semibold text-md text-primary mt-4 mb-2 flex items-center">
                    <ListChecks className="mr-2 h-5 w-5 text-accent" /> Especificações Técnicas:
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-sm text-foreground/80">
                    {product.specifications.map(spec => (
                      <li key={spec.key}><strong>{spec.key}:</strong> {spec.value}</li>
                    ))}
                  </ul>
                </div>
              )}

              {product.availablePackages && product.availablePackages.length > 0 && (
                 <div>
                  <h3 className="font-semibold text-md text-primary mt-4 mb-2 flex items-center">
                    <Package className="mr-2 h-5 w-5 text-accent" /> Embalagens Disponíveis:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {product.availablePackages.map(pkg => (
                      <Badge key={pkg} variant="secondary" className="text-sm">{pkg}</Badge>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="mt-6 pt-6 border-t">
                <h3 className="font-semibold text-lg text-primary mb-3">Interessado neste produto?</h3>
                <Link href="/contato" legacyBehavior>
                  <Button size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    Solicitar Orçamento ou Consultar Especialista
                  </Button>
                </Link>
                <p className="text-xs text-muted-foreground mt-2 text-center">Entraremos em contato para fornecer mais informações.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <div className="mt-10 md:mt-12">
        <AiProductRecommendations input={recommendationInput} />
      </div>
    </div>
  );
}
