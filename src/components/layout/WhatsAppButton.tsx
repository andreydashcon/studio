'use client';

import { MessageSquare } from 'lucide-react'; // Lucide's generic message icon, as WhatsApp icon is not standard.
import { Button } from '@/components/ui/button';

export default function WhatsAppButton() {
  const phoneNumber = "5547900000000"; // Replace with actual WhatsApp number
  const message = "Olá! Gostaria de mais informações sobre os produtos/serviços da Agro Saletense.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contatar via WhatsApp"
      className="fixed bottom-6 right-6 z-50"
    >
      <Button
        size="icon"
        className="bg-green-500 hover:bg-green-600 text-white rounded-full h-14 w-14 shadow-lg flex items-center justify-center"
        aria-label="WhatsApp"
      >
        {/* Using a generic message icon as a placeholder for WhatsApp logo */}
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
      </Button>
    </a>
  );
}
