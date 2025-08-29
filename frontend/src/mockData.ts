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
  }
];

export const getRecipeById = (id: string): Recipe | undefined => {
  return mockRecipes.find(recipe => recipe.id === id);
};