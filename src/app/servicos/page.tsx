import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { services } from '@/data/services';
import { ArrowRight, Sparkles } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Serviços - AgroConnect SC',
  description: 'Conheça os serviços especializados da AgroConnect SC: pulverização com drone, mapeamento agrícola, consultoria técnica e mais.',
};

export default function ServicosPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:px-6 md:py-12">
      <header className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">Nossos Serviços</h1>
        <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
          Tecnologia e conhecimento técnico para otimizar sua produção e garantir os melhores resultados no campo.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {services.map((service) => (
          <Link key={service.id} href={`/servicos/${service.slug}`} legacyBehavior>
            <a className="block group">
              <Card className="h-full flex flex-col shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 overflow-hidden">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    {service.icon ? <service.icon className="h-8 w-8 text-primary mr-3" /> : <Sparkles className="h-8 w-8 text-primary mr-3" />}
                    <CardTitle className="font-headline text-2xl text-primary group-hover:text-accent transition-colors duration-300">
                      {service.name}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between">
                  <CardDescription className="text-foreground/70 mb-4 line-clamp-4">
                    {service.shortDescription}
                  </CardDescription>
                  <div className="mt-auto text-accent font-semibold flex items-center group-hover:underline">
                    Saiba Mais <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
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
