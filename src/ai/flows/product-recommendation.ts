// use server'

/**
 * @fileOverview Product recommendation AI agent.
 *
 * - productRecommendation - A function that handles the product recommendation process.
 * - ProductRecommendationInput - The input type for the productRecommendation function.
 * - ProductRecommendationOutput - The return type for the productRecommendation function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ProductRecommendationInputSchema = z.object({
  productName: z.string().describe('The name of the product being viewed.'),
  productDescription: z.string().describe('The description of the product.'),
  category: z.string().describe('The product category'),
});
export type ProductRecommendationInput = z.infer<typeof ProductRecommendationInputSchema>;

const ProductRecommendationOutputSchema = z.object({
  recommendedProducts: z
    .array(z.string())
    .describe('A list of recommended product names related to the input product.'),
  reasoning: z
    .string()
    .describe('Explanation of why the products are recommended, and how they related to the input product')
    .optional(),
});
export type ProductRecommendationOutput = z.infer<typeof ProductRecommendationOutputSchema>;

export async function productRecommendation(input: ProductRecommendationInput): Promise<ProductRecommendationOutput> {
  return productRecommendationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'productRecommendationPrompt',
  input: {schema: ProductRecommendationInputSchema},
  output: {schema: ProductRecommendationOutputSchema},
  prompt: `You are an expert in agricultural and veterinary products. When a customer views a product, you will suggest related products that they may want to purchase in addition to the product they are viewing. Products should be complementary in nature. If the product is an animal medicine, suggest related products for animal care.

Product Name: {{{productName}}}
Product Description: {{{productDescription}}}
Category: {{{category}}}

Suggest 3-5 related products. Return the list of product names. Explain why they are recommended and how they relate to the input product.`,
});

const productRecommendationFlow = ai.defineFlow(
  {
    name: 'productRecommendationFlow',
    inputSchema: ProductRecommendationInputSchema,
    outputSchema: ProductRecommendationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
