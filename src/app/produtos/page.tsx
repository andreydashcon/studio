import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { productCategories } from '@/data/products';
import { ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Produtos - AgroConnect SC',
  description: 'Explore nossa vasta gama de produtos agrícolas e veterinários. Encontre insumos, rações, medicamentos, equipamentos e muito mais.',
};

export default function ProdutosPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:px-6 md:py-12">
      <header className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">Nossos Produtos</h1>
        <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
          Oferecemos uma linha completa de soluções para atender todas as necessidades do produtor rural e proprietário de animais.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {productCategories.map((category) => (
          <Link key={category.id} href={`/produtos/${category.slug}`} legacyBehavior>
            <a className="block group">
              <Card className="h-full flex flex-col shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 overflow-hidden">
                {category.image && (
                  <div className="relative w-full h-48">
                    <Image
                      src={category.image}
                      alt={category.name}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={category.dataAiHint || 'category items'}
                    />
                     <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300"></div>
                  </div>
                )}
                <CardHeader className="pt-6">
                  <div className="flex items-center mb-2">
                    {category.icon && <category.icon className="h-8 w-8 text-primary mr-3" />}
                    <CardTitle className="font-headline text-2xl text-primary group-hover:text-accent transition-colors duration-300">
                      {category.name}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between">
                  <CardDescription className="text-foreground/70 mb-4">
                    {category.description}
                  </CardDescription>
                  <div className="mt-auto text-accent font-semibold flex items-center group-hover:underline">
                    Ver Produtos <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </CardContent>
              </Card>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}
