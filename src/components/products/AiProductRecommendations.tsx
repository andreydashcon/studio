'use client';

import { useEffect, useState } from 'react';
import { getAiRecommendations } from '@/lib/actions';
import type { ProductRecommendationInput, ProductRecommendationOutput } from '@/ai/flows/product-recommendation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Loader2, Zap } from 'lucide-react';
import Link from 'next/link'; // Assuming product names can be linked
import { Button } from '../ui/button';

interface AiProductRecommendationsProps {
  input: ProductRecommendationInput;
}

export default function AiProductRecommendations({ input }: AiProductRecommendationsProps) {
  const [recommendations, setRecommendations] = useState<ProductRecommendationOutput | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchRecommendations() {
      setIsLoading(true);
      setError(null);
      const result = await getAiRecommendations(input);
      if ('error' in result) {
        setError(result.error);
      } else {
        setRecommendations(result);
      }
      setIsLoading(false);
    }

    fetchRecommendations();
  }, [input]);

  if (isLoading) {
    return (
      <Card className="mt-8 shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline text-xl text-primary flex items-center">
            <Zap className="mr-2 h-5 w-5 text-accent" /> Sugestões Inteligentes
          </CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-center py-8">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="ml-3 text-foreground/70">Buscando recomendações...</p>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Alert variant="destructive" className="mt-8">
        <AlertTitle>Erro ao buscar recomendações</AlertTitle>
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    );
  }

  if (!recommendations || recommendations.recommendedProducts.length === 0) {
    return null; // Or a message like "No specific recommendations at this time."
  }

  return (
    <Card className="mt-8 shadow-lg bg-primary/5 border-primary/20">
      <CardHeader>
        <CardTitle className="font-headline text-xl md:text-2xl text-primary flex items-center">
          <Zap className="mr-2 h-6 w-6 text-accent" /> Produtos Relacionados (Sugestão IA)
        </CardTitle>
      </CardHeader>
      <CardContent>
        {recommendations.reasoning && (
          <p className="text-sm text-foreground/80 mb-4 italic">"{recommendations.reasoning}"</p>
        )}
        <ul className="space-y-2">
          {recommendations.recommendedProducts.map((productName, index) => (
            <li key={index} className="text-foreground/90">
              {/* This assumes product names can be slugs or have a search page.
                  For a real app, you'd fetch product details/links for these names. */}
              <Button variant="link" asChild className="p-0 h-auto text-md text-accent hover:underline">
                {/* A better approach would be to find product by name and link to its page */}
                <Link href={`/produtos?search=${encodeURIComponent(productName)}`}>
                  {productName}
                </Link>
              </Button>
            </li>
          ))}
        </ul>
        <p className="text-xs text-muted-foreground mt-4">*Estas são sugestões geradas por inteligência artificial e podem requerer consulta técnica.</p>
      </CardContent>
    </Card>
  );
}
