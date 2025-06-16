import Image from 'next/image';
import Link from 'next/link';
import Banner from '@/components/home/Banner';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Leaf, Bone, SprayCan as DroneIcon, ArrowRight, Rss, MessageCircle } from 'lucide-react'; // Using SprayCan for Drone as placeholder
import { productCategoriesData, serviceCategoriesData } from '@/data/navigation';


export default function HomePage() {
  const featuredProductCategories = productCategoriesData.slice(0, 3);
  const featuredServices = serviceCategoriesData.slice(0,3);

  return (
    <div className="flex flex-col">
      <Banner />

      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-semibold text-primary mb-4">
            Bem-vindo à AgroConnect SC!
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto mb-8">
            Sua parceira completa em Salete e região, oferecendo desde insumos de alta qualidade e agricultura de precisão até cuidados veterinários especializados. Unimos tradição e tecnologia para impulsionar seus resultados no campo.
          </p>
          <Link href="/sobre-nos">
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
              Conheça Nossa História <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-secondary/50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-headline text-center text-3xl md:text-4xl font-semibold text-primary mb-10">
            Nossas Soluções
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Insumos Agrícolas", description: "Sementes, fertilizantes, corretivos e defensivos para máxima produtividade.", Icon: Leaf, link: "/produtos/insumos-graos" },
              { title: "Saúde Animal", description: "Medicamentos, vacinas e nutrição para o bem-estar do seu rebanho e pets.", Icon: Bone, link: "/produtos/saude-animal" },
              { title: "Serviços de Precisão", description: "Pulverização com drone, mapeamento e consultoria técnica especializada.", Icon: DroneIcon, link: "/servicos/pulverizacao-drone" },
            ].map((item, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                <CardHeader className="items-center text-center">
                  <div className="p-4 bg-primary/20 rounded-full mb-4 inline-block">
                    <item.Icon className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle className="font-headline text-2xl text-primary">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow text-center">
                  <CardDescription className="text-foreground/70 mb-4">{item.description}</CardDescription>
                  <Link href={item.link}>
                    <Button variant="link" className="text-accent hover:text-accent/80">
                      Ver Mais <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-headline text-center text-3xl md:text-4xl font-semibold text-primary mb-10">
            Acesso Rápido
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="font-headline text-xl text-primary flex items-center">
                  <Rss className="mr-2 h-6 w-6 text-accent" /> Últimas Notícias e Dicas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70 mb-4">Mantenha-se atualizado com as novidades do setor e dicas de manejo.</p>
                <Link href="/blog">
                  <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent/10">
                    Acessar Blog
                  </Button>
                </Link>
              </CardContent>
            </Card>
            <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="font-headline text-xl text-primary flex items-center">
                  <MessageCircle className="mr-2 h-6 w-6 text-accent" /> Solicite um Orçamento
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70 mb-4">Precisa de produtos ou serviços? Entre em contato para um orçamento personalizado.</p>
                <Link href="/contato">
                  <Button variant="default" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    Fale Conosco
                  </Button>
                </Link>
              </CardContent>
            </Card>
             <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="font-headline text-xl text-primary flex items-center">
                  <Image src="https://placehold.co/50x50.png" alt="Produto em destaque" width={50} height={50} className="mr-2 rounded" data-ai-hint="fertilizer bag" /> Produtos em Destaque
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70 mb-4">Confira nossas sementes de milho com alto potencial produtivo.</p>
                <Link href="/produtos/insumos-graos"> {/* Example link */}
                  <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent/10">
                    Ver Produtos
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-primary/10">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="font-headline text-2xl md:text-3xl font-semibold text-primary mb-4">
            Compromisso com Salete e Santa Catarina
          </h2>
          <p className="text-md md:text-lg text-foreground/80 max-w-2xl mx-auto">
            Orgulhosamente servindo nossa comunidade local, contribuindo para o desenvolvimento sustentável do agronegócio catarinense.
          </p>
        </div>
      </section>
    </div>
  );
}
