'use server';

import { productRecommendation, type ProductRecommendationInput, type ProductRecommendationOutput } from '@/ai/flows/product-recommendation';
import { z } from 'zod';

// Schema for contact form validation
const ContactFormSchema = z.object({
  name: z.string().min(2, { message: "O nome deve ter pelo menos 2 caracteres." }),
  email: z.string().email({ message: "Por favor, insira um email válido." }),
  phone: z.string().optional(),
  subject: z.string().min(3, { message: "O assunto deve ter pelo menos 3 caracteres." }),
  message: z.string().min(10, { message: "A mensagem deve ter pelo menos 10 caracteres." }),
});

export type ContactFormState = {
  message: string;
  fields?: Record<string, string>;
  issues?: string[];
  success: boolean;
};

export async function submitContactForm(prevState: ContactFormState, formData: FormData): Promise<ContactFormState> {
  const validatedFields = ContactFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    subject: formData.get('subject'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      message: "Erro de validação.",
      fields: {
        name: formData.get('name')?.toString() || '',
        email: formData.get('email')?.toString() || '',
        phone: formData.get('phone')?.toString() || '',
        subject: formData.get('subject')?.toString() || '',
        message: formData.get('message')?.toString() || '',
      },
      issues: validatedFields.error.issues.map((issue) => issue.message),
      success: false,
    };
  }
  
  const { name, email, phone, subject, message } = validatedFields.data;

  // In a real app, you'd send an email or save to a database here.
  // Example: await sendEmail({ to: 'admin@agrosaletense.com.br', subject, html: `...` });
  console.log('Contact form submitted:', { name, email, phone, subject, message });
  
  // Simulate email sending success
  return { success: true, message: 'Obrigado pelo seu contato! Responderemos em breve.' };
}

export async function getAiRecommendations(input: ProductRecommendationInput): Promise<ProductRecommendationOutput | { error: string }> {
  try {
    // Basic validation, can be expanded
    if (!input.productName || !input.productDescription || !input.category) {
      return { error: 'Dados insuficientes para recomendação.' };
    }
    const recommendations = await productRecommendation(input);
    return recommendations;
  } catch (error) {
    console.error('Error getting AI recommendations:', error);
    // It's good practice to not expose raw error messages to the client
    return { error: 'Falha ao buscar recomendações. Tente novamente mais tarde.' };
  }
}
