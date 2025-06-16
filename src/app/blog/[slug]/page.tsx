import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getBlogPostBySlug, blogPosts as allBlogPosts } from '@/data/blog';
import { CalendarDays, UserCircle, Tag, ChevronRight } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return allBlogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug);
  if (!post) {
    return {
      title: 'Post não encontrado',
      description: 'O post do blog que você está procurando não foi encontrado.',
    };
  }
  return {
    title: `${post.title} - Blog AgroConnect SC`,
    description: post.excerpt,
  };
}


export default function BlogPostPage({ params }: Props) {
  const { slug } = params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }
  
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      year: 'numeric', month: 'long', day: 'numeric'
    });
  };

  return (
    <div className="container mx-auto px-4 py-8 md:px-6 md:py-12 max-w-4xl">
      <article>
        <header className="mb-8">
          <div className="flex items-center text-sm text-foreground/70 mb-4">
            <Link href="/blog" className="hover:text-primary">Blog</Link>
            <ChevronRight className="h-4 w-4 mx-1" />
            {post.category && <span className="font-medium text-primary">{post.category}</span>}
          </div>
          <h1 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-3">{post.title}</h1>
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <span className="flex items-center"><CalendarDays className="h-4 w-4 mr-1.5" /> {formatDate(post.date)}</span>
            <span className="flex items-center"><UserCircle className="h-4 w-4 mr-1.5" /> Por {post.author}</span>
          </div>
        </header>

        {post.imageUrl && (
          <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg mb-8">
            <Image
              src={post.imageUrl}
              alt={post.title}
              layout="fill"
              objectFit="cover"
              priority
              data-ai-hint={post.dataAiHint || 'blog main'}
            />
          </div>
        )}

        <div 
          className="prose prose-lg lg:prose-xl max-w-none text-foreground/90 
                     prose-headings:font-headline prose-headings:text-primary prose-a:text-accent hover:prose-a:text-accent/80 prose-strong:text-foreground/95
                     prose-img:rounded-lg prose-img:shadow-md"
          dangerouslySetInnerHTML={{ __html: post.content }} 
        />

        {post.tags && post.tags.length > 0 && (
          <footer className="mt-10 pt-6 border-t">
            <h3 className="text-md font-semibold text-primary mb-2 flex items-center">
              <Tag className="h-4 w-4 mr-2 text-accent" /> Tags:
            </h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map(tag => (
                <Badge key={tag} variant="secondary" className="text-sm cursor-pointer hover:bg-primary/20">
                  {tag}
                </Badge>
              ))}
            </div>
          </footer>
        )}
      </article>
       <div className="mt-12 text-center">
          <Link href="/blog" className="text-accent hover:underline font-medium">
            &larr; Voltar para todos os posts
          </Link>
        </div>
    </div>
  );
}
