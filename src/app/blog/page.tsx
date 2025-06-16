import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { blogPosts } from '@/data/blog';
import { ArrowRight, CalendarDays, UserCircle } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - AgroConnect SC',
  description: 'Notícias, dicas e informações relevantes sobre agronegócio, manejo de culturas, saúde animal e tecnologias agrícolas.',
};

export default function BlogPage() {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      year: 'numeric', month: 'long', day: 'numeric'
    });
  };

  return (
    <div className="container mx-auto px-4 py-8 md:px-6 md:py-12">
      <header className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">Nosso Blog</h1>
        <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
          Mantenha-se informado com as últimas notícias, dicas de manejo, inovações tecnológicas e comunicados da AgroConnect SC.
        </p>
      </header>

      {blogPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="flex flex-col shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out group overflow-hidden">
              {post.imageUrl && (
                <Link href={`/blog/${post.slug}`} legacyBehavior>
                  <a className="block relative w-full h-48 md:h-56 overflow-hidden">
                    <Image
                      src={post.imageUrl}
                      alt={post.title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={post.dataAiHint || 'blog topic'}
                    />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </a>
                </Link>
              )}
              <CardHeader className="pt-4">
                 <div className="text-xs text-muted-foreground mb-1 flex items-center space-x-3">
                    <span className="flex items-center"><CalendarDays className="h-3.5 w-3.5 mr-1" /> {formatDate(post.date)}</span>
                    <span className="flex items-center"><UserCircle className="h-3.5 w-3.5 mr-1" /> {post.author}</span>
                  </div>
                <Link href={`/blog/${post.slug}`} legacyBehavior>
                  <a>
                    <CardTitle className="font-headline text-xl text-primary group-hover:text-accent transition-colors duration-300 leading-tight">
                      {post.title}
                    </CardTitle>
                  </a>
                </Link>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between pt-0">
                <CardDescription className="text-sm text-foreground/70 mb-4 line-clamp-3">
                  {post.excerpt}
                </CardDescription>
                <Link href={`/blog/${post.slug}`} legacyBehavior>
                  <Button variant="outline" size="sm" className="w-full mt-auto border-accent text-accent hover:bg-accent/10 hover:text-accent">
                    Leia Mais <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-10">
          <p className="text-xl text-foreground/70">Nenhuma postagem no blog encontrada no momento.</p>
        </div>
      )}
      {/* TODO: Add pagination and filtering by category/tag */}
    </div>
  );
}
