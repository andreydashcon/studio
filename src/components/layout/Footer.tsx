import Link from 'next/link';
import { Facebook, Instagram, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground border-t border-border/40">
      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-headline text-lg font-semibold text-primary mb-3">AgroConnect SC</h3>
            <p className="text-sm">
              Soluções completas do plantio à colheita e para a saúde animal em Salete e região de Santa Catarina.
            </p>
            <p className="text-sm mt-2">Tradição e inovação a serviço do agricultor e pecuarista.</p>
          </div>
          
          <div>
            <h3 className="font-headline text-lg font-semibold text-primary mb-3">Contato Rápido</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-accent" />
                <span>Rua Principal, 123, Centro, Salete - SC</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-accent" />
                <a href="tel:+554700000000" className="hover:text-primary">(47) 0000-0000</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-accent" />
                <a href="mailto:contato@agrosaletense.com.br" className="hover:text-primary">contato@agrosaletense.com.br</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-headline text-lg font-semibold text-primary mb-3">Navegue</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/sobre-nos" className="hover:text-primary">Sobre Nós</Link></li>
              <li><Link href="/produtos" className="hover:text-primary">Produtos</Link></li>
              <li><Link href="/servicos" className="hover:text-primary">Serviços</Link></li>
              <li><Link href="/blog" className="hover:text-primary">Blog</Link></li>
              <li><Link href="/contato" className="hover:text-primary">Contato</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/60 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {currentYear} AgroConnect SC (Agro Saletense). Todos os direitos reservados.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-secondary-foreground hover:text-primary">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-secondary-foreground hover:text-primary">
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
