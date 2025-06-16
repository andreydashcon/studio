import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/types';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  categorySlug: string;
}

export default function ProductCard({ product, categorySlug }: ProductCardProps) {
  return (
    <Card className="h-full flex flex-col shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 overflow-hidden group">
      <Link href={`/produtos/${categorySlug}/${product.slug}`} legacyBehavior>
        <a className="block">
          <div className="relative w-full h-48 md:h-56 overflow-hidden">
            <Image
              src={product.images[0] || 'https://placehold.co/400x300.png'}
              alt={product.name}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 group-hover:scale-105"
              data-ai-hint={product.dataAiHint || 'product image'}
            />
             <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </a>
      </Link>
      <CardHeader className="pt-4 pb-2">
        {product.brand && (
          <Badge variant="secondary" className="mb-1 w-fit">{product.brand}</Badge>
        )}
        <Link href={`/produtos/${categorySlug}/${product.slug}`} legacyBehavior>
          <a>
            <CardTitle className="font-headline text-xl text-primary group-hover:text-accent transition-colors duration-300 leading-tight">
              {product.name}
            </CardTitle>
          </a>
        </Link>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-between pt-0 pb-4">
        <CardDescription className="text-sm text-foreground/70 mb-3 line-clamp-3">
          {product.shortDescription}
        </CardDescription>
        <Link href={`/produtos/${categorySlug}/${product.slug}`} legacyBehavior>
          <Button variant="outline" size="sm" className="w-full mt-auto border-accent text-accent hover:bg-accent/10 hover:text-accent">
            Ver Detalhes <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
