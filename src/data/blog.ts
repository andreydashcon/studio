import type { BlogPost } from '@/types';

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'manejo-eficiente-milho-safrinha',
    title: 'Manejo Eficiente do Milho Safrinha em Santa Catarina',
    date: '2024-07-15',
    author: 'Equipe AgroConnect SC',
    excerpt: 'Dicas essenciais para garantir uma boa produtividade no milho safrinha, considerando as particularidades do clima catarinense.',
    content: `
      <p>O milho safrinha tem se tornado cada vez mais importante para os produtores em Santa Catarina. No entanto, para alcançar bons resultados, é crucial adotar um manejo eficiente, atento às condições climáticas e especificidades da região.</p>
      <h2 class="font-headline text-xl text-primary mt-4 mb-2">Escolha do Híbrido</h2>
      <p>Opte por híbridos de ciclo adequado para a janela de plantio da safrinha, com boa tolerância a doenças e estresse hídrico. Consulte nossos agrônomos para a melhor recomendação.</p>
      <h2 class="font-headline text-xl text-primary mt-4 mb-2">Preparo do Solo e Plantio</h2>
      <p>Realize uma boa dessecação e, se necessário, correção do solo. O plantio deve ser feito em condições ideais de umidade e temperatura para garantir uma boa emergência.</p>
      <figure class="my-4">
        <img src="https://placehold.co/700x350.png" alt="Plantio de milho" class="rounded-lg shadow-md mx-auto" data-ai-hint="corn planting" />
        <figcaption class="text-center text-sm text-gray-600 mt-1">Plantio de milho safrinha.</figcaption>
      </figure>
      <h2 class="font-headline text-xl text-primary mt-4 mb-2">Manejo de Pragas e Doenças</h2>
      <p>Monitore constantemente a lavoura para identificar precocemente a presença de pragas e doenças. Utilize defensivos de forma consciente e seguindo as recomendações técnicas.</p>
      <p>A AgroConnect SC oferece um portfólio completo de soluções para o milho safrinha. <a href="/contato" class="text-accent hover:underline">Entre em contato</a> para saber mais!</p>
    `,
    category: 'Manejo de Culturas',
    tags: ['milho', 'safrinha', 'santa catarina', 'produtividade'],
    imageUrl: 'https://placehold.co/800x400.png',
    dataAiHint: 'corn field',
  },
  {
    id: '2',
    slug: 'importancia-vacinacao-rebanho',
    title: 'A Importância da Vacinação para a Saúde do Rebanho',
    date: '2024-07-10',
    author: 'Dr. Pecuário (Veterinário Convidado)',
    excerpt: 'Manter o calendário de vacinação em dia é fundamental para prevenir doenças e garantir a produtividade e bem-estar dos animais.',
    content: `
      <p>A vacinação é uma das principais ferramentas para proteger a saúde do rebanho bovino, suíno e de aves. Prevenir é sempre melhor e mais barato do que tratar doenças estabelecidas, que podem causar grandes prejuízos.</p>
      <h2 class="font-headline text-xl text-primary mt-4 mb-2">Principais Doenças Preveníveis</h2>
      <p>Doenças como febre aftosa, raiva, brucelose, clostridioses, entre outras, podem ser controladas com um programa de vacinação adequado. Cada região e tipo de criação possui um calendário específico.</p>
      <figure class="my-4">
        <img src="https://placehold.co/700x350.png" alt="Veterinário vacinando gado" class="rounded-lg shadow-md mx-auto" data-ai-hint="cattle vaccination" />
        <figcaption class="text-center text-sm text-gray-600 mt-1">Vacinação é crucial para a saúde do rebanho.</figcaption>
      </figure>
      <h2 class="font-headline text-xl text-primary mt-4 mb-2">Consulte um Veterinário</h2>
      <p>É essencial que o produtor siga as orientações de um médico veterinário para elaborar e executar o calendário de vacinação. A AgroConnect SC conta com profissionais qualificados para auxiliar.</p>
    `,
    category: 'Saúde Animal',
    tags: ['vacinação', 'gado', 'saúde animal', 'prevenção'],
    imageUrl: 'https://placehold.co/800x400.png',
    dataAiHint: 'cattle herd',
  },
  {
    id: '3',
    slug: 'beneficios-pulverizacao-drone',
    title: 'Benefícios da Pulverização com Drone na Agricultura Moderna',
    date: '2024-07-05',
    author: 'Equipe AgroConnect SC',
    excerpt: 'Descubra como a tecnologia de drones está revolucionando a aplicação de defensivos, trazendo mais precisão, economia e segurança.',
    content: `
      <p>A agricultura de precisão avança a passos largos, e a pulverização com drones é uma das tecnologias que mais se destacam. Seus benefícios são inúmeros, impactando diretamente a produtividade e a sustentabilidade no campo.</p>
      <h2 class="font-headline text-xl text-primary mt-4 mb-2">Precisão e Eficiência</h2>
      <p>Drones equipados com GPS de alta precisão e bicos especiais garantem uma aplicação uniforme, atingindo o alvo com o mínimo de deriva. Isso resulta em melhor controle de pragas e doenças, e menor desperdício de produtos.</p>
      <figure class="my-4">
        <img src="https://placehold.co/700x350.png" alt="Drone pulverizando lavoura" class="rounded-lg shadow-md mx-auto" data-ai-hint="drone spraying" />
        <figcaption class="text-center text-sm text-gray-600 mt-1">Pulverização com drone: tecnologia e precisão.</figcaption>
      </figure>
      <h2 class="font-headline text-xl text-primary mt-4 mb-2">Outras Vantagens</h2>
      <ul class="list-disc list-inside space-y-1 my-2">
        <li>Acesso a áreas de difícil alcance por pulverizadores terrestres.</li>
        <li>Redução do amassamento da cultura.</li>
        <li>Menor consumo de água.</li>
        <li>Maior segurança para o operador.</li>
        <li>Rapidez na aplicação, aproveitando janelas climáticas ideais.</li>
      </ul>
      <p>A AgroConnect SC oferece serviços de pulverização com drone. <a href="/servicos/pulverizacao-drone" class="text-accent hover:underline">Saiba mais</a> sobre como podemos ajudar a otimizar sua lavoura.</p>
    `,
    category: 'Tecnologia Agrícola',
    tags: ['drone', 'pulverização', 'agricultura de precisão', 'tecnologia'],
    imageUrl: 'https://placehold.co/800x400.png',
    dataAiHint: 'drone agriculture',
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}
