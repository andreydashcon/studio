import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Building, Target, Eye, HeartHandshake, Award } from 'lucide-react';
import type { TeamMember } from '@/types';

const teamMembers: TeamMember[] = [
  { id: '1', name: 'João Silva', role: 'Engenheiro Agrônomo Chefe', imageUrl: 'https://placehold.co/300x300.png', dataAiHint: 'male portrait', description: 'Especialista em manejo de culturas e agricultura de precisão.' },
  { id: '2', name: 'Maria Oliveira', role: 'Médica Veterinária', imageUrl: 'https://placehold.co/300x300.png', dataAiHint: 'female portrait', description: 'Focada em saúde de rebanhos e nutrição animal.' },
  { id: '3', name: 'Carlos Pereira', role: 'Técnico Agrícola', imageUrl: 'https://placehold.co/300x300.png', dataAiHint: 'person field', description: 'Suporte em campo e implementação de novas tecnologias.' },
  { id: '4', name: 'Ana Costa', role: 'Gerente de Loja', imageUrl: 'https://placehold.co/300x300.png', dataAiHint: 'woman store', description: 'Responsável pelo atendimento e portfólio de produtos.' },
];

export default function SobreNosPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:px-6 md:py-12">
      <header className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">Sobre a AgroConnect SC</h1>
        <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
          Conheça nossa trajetória, nossos valores e a equipe dedicada a impulsionar o agronegócio em Salete e região.
        </p>
      </header>

      <section className="mb-12">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="font-headline text-2xl md:text-3xl text-primary flex items-center">
              <Award className="mr-3 h-8 w-8 text-accent" /> Nossa História
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-foreground/90">
            <p>
              Fundada há mais de 20 anos em Salete, Santa Catarina, a Agro Saletense (agora AgroConnect SC) nasceu da paixão pela terra e do desejo de servir aos agricultores e pecuaristas da nossa região. Começamos como uma pequena loja de insumos, e com muito trabalho, dedicação e a confiança dos nossos clientes, crescemos e expandimos nosso portfólio de produtos e serviços.
            </p>
            <p>
              Ao longo dos anos, acompanhamos de perto as transformações do agronegócio, investindo em conhecimento técnico, tecnologias inovadoras e na formação de uma equipe qualificada. Hoje, nos orgulhamos de ser uma referência em soluções completas, oferecendo desde o planejamento do plantio até a consultoria veterinária, sempre com foco na produtividade e sustentabilidade.
            </p>
            <Image 
              src="https://placehold.co/800x400.png" 
              alt="Fachada antiga da Agro Saletense" 
              width={800} 
              height={400} 
              className="rounded-lg mt-4 shadow-md"
              data-ai-hint="old store" 
            />
          </CardContent>
        </Card>
      </section>

      <section className="grid md:grid-cols-3 gap-8 mb-12">
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="font-headline text-xl text-primary flex items-center">
              <Target className="mr-2 h-6 w-6 text-accent" /> Missão
            </CardTitle>
          </CardHeader>
          <CardContent className="text-foreground/80">
            Fornecer soluções inovadoras e de alta qualidade para o agronegócio, contribuindo para o sucesso e a sustentabilidade dos nossos clientes e da comunidade.
          </CardContent>
        </Card>
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="font-headline text-xl text-primary flex items-center">
              <Eye className="mr-2 h-6 w-6 text-accent" /> Visão
            </CardTitle>
          </CardHeader>
          <CardContent className="text-foreground/80">
            Ser a principal referência em produtos e serviços agropecuários na região de Salete, reconhecida pela excelência técnica, confiança e compromisso com o cliente.
          </CardContent>
        </Card>
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="font-headline text-xl text-primary flex items-center">
              <HeartHandshake className="mr-2 h-6 w-6 text-accent" /> Valores
            </CardTitle>
          </CardHeader>
          <CardContent className="text-foreground/80">
            <ul className="list-disc list-inside space-y-1">
              <li>Ética e Transparência</li>
              <li>Foco no Cliente</li>
              <li>Inovação e Qualidade</li>
              <li>Compromisso com Resultados</li>
              <li>Respeito ao Meio Ambiente</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className="mb-12">
        <h2 className="font-headline text-3xl md:text-4xl font-semibold text-primary text-center mb-8">Nossa Equipe</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map(member => (
            <Card key={member.id} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <Image 
                  src={member.imageUrl} 
                  alt={member.name} 
                  width={150} 
                  height={150} 
                  className="rounded-full mx-auto mb-4 border-4 border-primary/20"
                  data-ai-hint={member.dataAiHint}
                />
                <h3 className="font-headline text-xl font-semibold text-primary">{member.name}</h3>
                <p className="text-accent font-medium">{member.role}</p>
                {member.description && <p className="text-sm text-foreground/70 mt-2">{member.description}</p>}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="font-headline text-2xl md:text-3xl text-primary flex items-center">
              <Building className="mr-3 h-8 w-8 text-accent" /> Estrutura Física
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-foreground/90">
            <p>
              Contamos com uma ampla e moderna loja em Salete, projetada para oferecer a melhor experiência aos nossos clientes. Nosso espaço inclui um vasto showroom de produtos, áreas de atendimento especializado, e um armazém organizado para garantir a rápida disponibilidade dos insumos.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <Image 
                src="https://placehold.co/600x400.png" 
                alt="Loja Agro Saletense" 
                width={600} 
                height={400} 
                className="rounded-lg shadow-md"
                data-ai-hint="store interior" 
              />
              <Image 
                src="https://placehold.co/600x400.png" 
                alt="Armazém de insumos" 
                width={600} 
                height={400} 
                className="rounded-lg shadow-md"
                data-ai-hint="warehouse products"
              />
            </div>
            <p className="mt-4">
              Investimos continuamente em nossa infraestrutura para assegurar a qualidade no armazenamento e manuseio de produtos, especialmente medicamentos e defensivos, seguindo todas as normas e recomendações técnicas.
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
