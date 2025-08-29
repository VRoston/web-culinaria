export interface Recipe {
  id: string;
  title: string;
  description: string;
  image: string;
  time: string;
  servings: number;
  ingredients: string[];
  instructions: string[];
}

export const mockRecipes: Recipe[] = [
  {
    id: "1",
    title: "Bolo de Chocolate",
    description: "Um bolo delicioso e fácil de fazer.",
    image: "/Bolo-de-chocolate.jpg",
    time: "45 min",
    servings: 8,
    ingredients: [
      "2 xícaras de farinha de trigo",
      "1 xícara de açúcar",
      "1/2 xícara de cacau em pó",
      "1 colher de sopa de fermento em pó",
      "1/2 colher de chá de sal",
      "2 ovos",
      "1 xícara de leite",
      "1/2 xícara de óleo vegetal",
      "2 colheres de chá de essência de baunilha"
    ],
    instructions: [
      "Pré-aqueça o forno a 180°C.",
      "Em uma tigela grande, misture os ingredientes secos: farinha, açúcar, cacau, fermento e sal.",
      "Em outra tigela, bata os ovos, leite, óleo e baunilha.",
      "Combine as misturas úmidas com as secas até formar uma massa homogênea.",
      "Despeje a massa em uma forma untada e asse por 35-40 minutos.",
      "Deixe esfriar e sirva."
    ]
  },
  {
    id: "2",
    title: "Salada Caesar",
    description: "Uma salada fresca e crocante.",
    image: "/salada-caesar.webp",
    time: "15 min",
    servings: 4,
    ingredients: [
      "1 alface romana",
      "1/2 xícara de croutons",
      "1/4 xícara de queijo parmesão ralado",
      "Molho Caesar a gosto",
      "Peito de frango grelhado (opcional)"
    ],
    instructions: [
      "Lave e rasgue a alface em pedaços.",
      "Em uma tigela grande, misture a alface com os croutons e o queijo.",
      "Adicione o molho Caesar e misture bem.",
      "Sirva imediatamente."
    ]
  },
  {
    id: "3",
    title: "Macarrão Carbonara",
    description: "Clássico italiano cremoso e saboroso.",
    image: "/Receita-de-macarrao-a-carbonara-768x619.jpg",
    time: "30 min",
    servings: 6,
    ingredients: [
      "400g de macarrão spaghetti",
      "200g de bacon ou pancetta",
      "2 ovos inteiros + 2 gemas",
      "1/2 xícara de queijo parmesão ralado",
      "Pimenta do reino a gosto",
      "Sal a gosto"
    ],
    instructions: [
      "Cozinhe o macarrão em água salgada até al dente.",
      "Em uma frigideira, frite o bacon até ficar crocante.",
      "Em uma tigela, misture os ovos, gemas e queijo.",
      "Escorra o macarrão e misture com o bacon na frigideira.",
      "Adicione a mistura de ovos fora do fogo, mexendo rapidamente.",
      "Tempere com pimenta e sirva."
    ]
  },
  {
    id: "4",
    title: "Risoto de Cogumelos",
    description: "Risoto cremoso com cogumelos frescos.",
    image: "/risoto.jpg",
    time: "40 min",
    servings: 4,
    ingredients: [
      "1 xícara de arroz arbóreo",
      "300g de cogumelos variados",
      "1 cebola picada",
      "4 xícaras de caldo de legumes",
      "1/2 xícara de vinho branco",
      "1/2 xícara de queijo parmesão ralado",
      "2 colheres de sopa de manteiga",
      "Sal e pimenta a gosto"
    ],
    instructions: [
      "Em uma panela, aqueça o caldo e mantenha aquecido.",
      "Em outra panela, refogue a cebola na manteiga até dourar.",
      "Adicione o arroz e refogue por 2 minutos.",
      "Despeje o vinho e mexa até evaporar.",
      "Adicione o caldo aos poucos, mexendo constantemente.",
      "Incorpore os cogumelos na metade do cozimento.",
      "Finalize com queijo parmesão e sirva quente."
    ]
  },
  {
    id: "5",
    title: "Tacos de Carne",
    description: "Tacos mexicanos deliciosos com carne temperada.",
    image: "/tacos.jpg",
    time: "25 min",
    servings: 6,
    ingredients: [
      "500g de carne moída",
      "8 tortillas de milho",
      "1 cebola picada",
      "2 dentes de alho",
      "1 colher de chá de cominho",
      "1 colher de chá de páprica",
      "Sal e pimenta a gosto",
      "Acompanhamentos: alface, queijo, salsa"
    ],
    instructions: [
      "Em uma frigideira, refogue a cebola e o alho.",
      "Adicione a carne moída e tempere com cominho, páprica, sal e pimenta.",
      "Cozinhe até a carne estar dourada.",
      "Aqueça as tortillas em uma frigideira seca.",
      "Monte os tacos com a carne e acompanhamentos.",
      "Sirva imediatamente."
    ]
  },
  {
    id: "6",
    title: "Sopa de Legumes",
    description: "Sopa saudável e reconfortante.",
    image: "/sopa.jpg",
    time: "35 min",
    servings: 6,
    ingredients: [
      "2 cenouras picadas",
      "2 batatas picadas",
      "1 cebola picada",
      "2 dentes de alho",
      "1 litro de caldo de legumes",
      "1 xícara de couve-flor",
      "Sal e pimenta a gosto",
      "2 colheres de sopa de azeite"
    ],
    instructions: [
      "Em uma panela, aqueça o azeite e refogue a cebola e o alho.",
      "Adicione as cenouras, batatas e couve-flor.",
      "Despeje o caldo e deixe ferver.",
      "Cozinhe por 20-25 minutos até os legumes ficarem macios.",
      "Tempere com sal e pimenta.",
      "Sirva quente."
    ]
  },
  {
    id: "7",
    title: "Pavê de Chocolate",
    description: "Sobremesa cremosa e irresistível.",
    image: "/pave.jpg",
    time: "4 horas (incluindo geladeira)",
    servings: 8,
    ingredients: [
      "1 pacote de biscoito champanhe",
      "1 lata de leite condensado",
      "1 lata de creme de leite",
      "3 colheres de sopa de chocolate em pó",
      "2 xícaras de leite",
      "4 ovos",
      "1/2 xícara de açúcar"
    ],
    instructions: [
      "Em uma panela, misture o leite condensado, creme de leite, chocolate e leite.",
      "Cozinhe em fogo baixo até engrossar.",
      "Bata os ovos com o açúcar e adicione à mistura.",
      "Em um refratário, alterne camadas de biscoito e creme.",
      "Leve à geladeira por pelo menos 4 horas.",
      "Sirva gelado."
    ]
  },
  {
    id: "8",
    title: "Frango com Quiabo",
    description: "Prato brasileiro tradicional.",
    image: "/frango-quiabo.jpg",
    time: "50 min",
    servings: 4,
    ingredients: [
      "500g de frango em pedaços",
      "300g de quiabo",
      "1 cebola picada",
      "2 tomates picados",
      "2 dentes de alho",
      "Sal e pimenta a gosto",
      "2 colheres de sopa de óleo"
    ],
    instructions: [
      "Tempere o frango com sal, pimenta e alho.",
      "Em uma panela, doure o frango no óleo.",
      "Adicione a cebola e os tomates, refogue.",
      "Incorpore o quiabo e cozinhe por 20 minutos.",
      "Ajuste o tempero e sirva com arroz."
    ]
  },
  {
    id: "9",
    title: "Panqueca Americana",
    description: "Panquecas fofas e deliciosas.",
    image: "/panqueca.jpg",
    time: "20 min",
    servings: 4,
    ingredients: [
      "1 xícara de farinha de trigo",
      "2 colheres de sopa de açúcar",
      "1 colher de sopa de fermento em pó",
      "1/4 colher de chá de sal",
      "1 ovo",
      "1 xícara de leite",
      "2 colheres de sopa de manteiga derretida"
    ],
    instructions: [
      "Em uma tigela, misture os ingredientes secos.",
      "Em outra, bata o ovo, leite e manteiga.",
      "Combine as misturas até formar uma massa lisa.",
      "Aqueça uma frigideira antiaderente.",
      "Despeje porções da massa e cozinhe até dourar dos dois lados.",
      "Sirva com mel ou frutas."
    ]
  },
  {
    id: "10",
    title: "Lasanha de Carne",
    description: "Lasanha clássica com molho de carne.",
    image: "/lasanha.jpg",
    time: "1 hora 30 min",
    servings: 8,
    ingredients: [
      "500g de carne moída",
      "12 folhas de massa para lasanha",
      "2 xícaras de queijo mussarela ralado",
      "1/2 xícara de queijo parmesão ralado",
      "1 cebola picada",
      "2 latas de molho de tomate",
      "Sal e pimenta a gosto"
    ],
    instructions: [
      "Refogue a cebola e a carne moída.",
      "Adicione o molho de tomate e tempere.",
      "Em um refratário, alterne camadas de massa, molho e queijo.",
      "Asse a 180°C por 40 minutos.",
      "Deixe descansar e sirva."
    ]
  }
];

export const getRecipeById = (id: string): Recipe | undefined => {
  return mockRecipes.find(recipe => recipe.id === id);
};