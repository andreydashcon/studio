import ContactForm from '@/components/contact/ContactForm';
import InteractiveMap from '@/components/contact/InteractiveMap';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, MapPin, Phone, Clock, Facebook, Instagram } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contato - AgroConnect SC',
  description: 'Entre em contato com a AgroConnect SC. Endereço, telefone, email e formulário de contato.',
};

export default function ContatoPage() {
  // const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  return (
    <div className="container mx-auto px-4 py-8 md:px-6 md:py-12">
      <header className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">Entre em Contato</h1>
        <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
          Estamos prontos para atender você! Tire suas dúvidas, solicite orçamentos ou agende uma visita.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
        <section>
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-primary">Nossas Informações</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 mr-3 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground">Endereço</h3>
                  <p className="text-foreground/80">Rua Principal, 123, Bairro Centro<br />Salete - SC, CEP 89196-000</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="h-6 w-6 mr-3 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground">Telefones</h3>
                  <p className="text-foreground/80">Loja: <a href="tel:+554735630000" className="hover:text-primary">(47) 3563-0000</a></p>
                  <p className="text-foreground/80">WhatsApp: <a href="https://wa.me/5547900000000" target="_blank" rel="noopener noreferrer" className="hover:text-primary">(47) 90000-0000</a></p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="h-6 w-6 mr-3 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground">Email</h3>
                  <p className="text-foreground/80"><a href="mailto:contato@agrosaletense.com.br" className="hover:text-primary">contato@agrosaletense.com.br</a></p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="h-6 w-6 mr-3 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground">Horário de Funcionamento</h3>
                  <p className="text-foreground/80">Segunda a Sexta: 07:30 - 12:00 / 13:30 - 18:00</p>
                  <p className="text-foreground/80">Sábado: 07:30 - 12:00</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Redes Sociais</h3>
                <div className="flex space-x-4">
                  <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-accent hover:text-primary">
                    <Facebook className="h-7 w-7" />
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-accent hover:text-primary">
                    <Instagram className="h-7 w-7" />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section>
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-primary">Envie uma Mensagem</CardTitle>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </section>
      </div>

      <section className="mt-12">
        <h2 className="font-headline text-3xl font-semibold text-primary text-center mb-6">Nossa Localização</h2>
        {/* Pass the API key if available, otherwise the component handles the placeholder */}
        <InteractiveMap /> 
      </section>
    </div>
  );
}
