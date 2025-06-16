import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getServiceBySlug, services as allServices } from '@/data/services';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Zap, ChevronRight, MessageSquare } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
// import AiProductRecommendations from '@/components/products/AiProductRecommendations'; // Can be adapted for services

type Props = {
  params: { serviceSlug: string };
};

export async function generateStaticParams() {
  return allServices.map((service) => ({
    serviceSlug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getServiceBySlug(params.serviceSlug);
  if (!service) {
    return {
      title: 'Serviço não encontrado',
      description: 'O serviço que você está procurando não foi encontrado.',
    };
  }
  return {
    title: `${service.name} - Serviços - AgroConnect SC`,
    description: service.shortDescription,
  };
}


export default function ServiceDetailPage({ params }: Props) {
  const { serviceSlug } = params;
  const service = getServiceBySlug(serviceSlug);

  if (!service) {
    notFound();
  }

  /*
  // Example input for AI recommendations (if applicable to services)
  const recommendationInput = {
    productName: service.name, // Treating service name as product name for the AI
    productDescription: service.longDescription,
    category: "Serviços Agrícolas", // A general category
  };
  */

  return (
    <div className="container mx-auto px-4 py-8 md:px-6 md:py-12">
      <header className="mb-8">
         <div className="flex items-center text-sm text-foreground/70 mb-2">
          <Link href="/servicos" className="hover:text-primary">Serviços</Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <span className="font-medium text-primary">{service.name}</span>
        </div>
        <h1 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold text-primary">{service.name}</h1>
        <p className="text-lg text-accent mt-1">{service.shortDescription}</p>
      </header>

      <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
        <div className="lg:col-span-2">
          <Card className="shadow-lg">
            <div className="relative w-full aspect-video rounded-t-lg overflow-hidden">
              <Image
                src={service.images[0] || 'https://placehold.co/800x450.png'}
                alt={service.name}
                layout="fill"
                objectFit="cover"
                data-ai-hint={service.dataAiHint || 'service image'}
              />
            </div>
            <CardContent className="p-6 space-y-6">
              <div className="prose prose-lg max-w-none text-foreground/90" dangerouslySetInnerHTML={{ __html: service.longDescription.replace(/\n/g, '<br />') }} />

              {service.benefits && service.benefits.length > 0 && (
                <div>
                  <h2 className="font-headline text-2xl text-primary mt-6 mb-3">Benefícios</h2>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-foreground/80">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {service.technologyUsed && service.technologyUsed.length > 0 && (
                <div>
                  <h2 className="font-headline text-2xl text-primary mt-6 mb-3">Tecnologias Utilizadas</h2>
                  <ul className="space-y-2">
                    {service.technologyUsed.map((tech, index) => (
                       <li key={index} className="flex items-start">
                        <Zap className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-foreground/80">{tech}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {service.targetCultures && service.targetCultures.length > 0 && (
                <div>
                  <h2 className="font-headline text-2xl text-primary mt-6 mb-3">Culturas Atendidas</h2>
                   <div className="flex flex-wrap gap-2">
                    {service.targetCultures.map(culture => (
                      <span key={culture} className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full">{culture}</span>
                    ))}
                  </div>
                </div>
              )}
              
              {service.videoUrl && (
                <div className="mt-6">
                  <h2 className="font-headline text-2xl text-primary mb-3">Veja em Ação</h2>
                  <div className="aspect-video">
                    <iframe 
                      src={service.videoUrl} 
                      title={`Vídeo sobre ${service.name}`}
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                      className="w-full h-full rounded-lg shadow-md"
                    ></iframe>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <aside className="lg:col-span-1 space-y-6">
          <Card className="shadow-md sticky top-24">
            <CardHeader>
              <CardTitle className="font-headline text-xl text-primary">Interessado neste Serviço?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80 mb-4">
                Entre em contato para um orçamento personalizado ou para saber mais sobre como {service.name} pode transformar sua produção.
              </p>
              <Link href="/contato" legacyBehavior>
                <Button size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  <MessageSquare className="mr-2 h-5 w-5"/> Solicitar Orçamento
                </Button>
              </Link>
            </CardContent>
          </Card>
          
          {/* 
          // Example for AI Recommendations for related services or products
          <div className="mt-8">
             <AiProductRecommendations input={recommendationInput} />
          </div>
          */}
        </aside>
      </div>
    </div>
  );
}
