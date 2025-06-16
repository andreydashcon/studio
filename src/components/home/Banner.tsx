'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface BannerSlide {
  id: number;
  imageUrl: string;
  dataAiHint: string;
  title: string;
  subtitle: string;
  buttonText?: string;
  buttonLink?: string;
}

const slides: BannerSlide[] = [
  {
    id: 1,
    imageUrl: 'https://placehold.co/1920x600.png',
    dataAiHint: 'farm field',
    title: 'Agro Saletense: Soluções Completas do Plantio à Colheita',
    subtitle: 'Tecnologia e tradição para o agronegócio de Salete e região.',
    buttonText: 'Nossos Produtos',
    buttonLink: '/produtos',
  },
  {
    id: 2,
    imageUrl: 'https://placehold.co/1920x600.png',
    dataAiHint: 'drone agriculture',
    title: 'Agricultura de Precisão com Drones',
    subtitle: 'Otimize sua produção com pulverização e mapeamento aéreo.',
    buttonText: 'Saiba Mais',
    buttonLink: '/servicos/pulverizacao-drone',
  },
  {
    id: 3,
    imageUrl: 'https://placehold.co/1920x600.png',
    dataAiHint: 'veterinary care',
    title: 'Saúde Animal em Foco',
    subtitle: 'Linha completa de medicamentos e suplementos veterinários.',
    buttonText: 'Linha Veterinária',
    buttonLink: '/produtos/saude-animal',
  },
];

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setTimeout(nextSlide, 7000); // Auto-rotate every 7 seconds
    return () => clearTimeout(timer);
  }, [currentSlide]);

  return (
    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden shadow-lg">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000 ease-in-out",
            index === currentSlide ? "opacity-100" : "opacity-0"
          )}
        >
          <Image
            src={slide.imageUrl}
            alt={slide.title}
            layout="fill"
            objectFit="cover"
            priority={index === 0}
            data-ai-hint={slide.dataAiHint}
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center p-4 md:p-8">
            <h1 className="font-headline text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 shadow-text">
              {slide.title}
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-6 max-w-3xl shadow-text">
              {slide.subtitle}
            </p>
            {slide.buttonText && slide.buttonLink && (
               <Link href={slide.buttonLink} passHref>
                <Button size="lg" variant="default" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 text-lg">
                  {slide.buttonText}
                </Button>
              </Link>
            )}
          </div>
        </div>
      ))}
      
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white border-none rounded-full h-10 w-10 md:h-12 md:w-12"
        onClick={prevSlide}
        aria-label="Slide anterior"
      >
        <ChevronLeft className="h-6 w-6 md:h-7 md:w-7" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white border-none rounded-full h-10 w-10 md:h-12 md:w-12"
        onClick={nextSlide}
        aria-label="Próximo slide"
      >
        <ChevronRight className="h-6 w-6 md:h-7 md:w-7" />
      </Button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Ir para slide ${index + 1}`}
            className={cn(
              "h-2 w-2 md:h-3 md:w-3 rounded-full transition-colors",
              currentSlide === index ? "bg-primary" : "bg-white/50 hover:bg-white/70"
            )}
          />
        ))}
      </div>
      <style jsx global>{`
        .shadow-text {
          text-shadow: 1px 1px 3px rgba(0,0,0,0.7);
        }
      `}</style>
    </div>
  );
}
