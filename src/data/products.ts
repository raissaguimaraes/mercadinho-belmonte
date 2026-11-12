import {
  Apple,
  Beef,
  Dog,
  Milk,
  Package,
  ShoppingBasket,
  Sparkles,
  Wine,
} from "lucide-react";

export const productCategories = [
  {
    id: "hortifruti",
    label: "Hortifruti",
    icon: Apple,
    description:
      "Frutas, verduras e legumes selecionados diariamente.",
    products: [
      {
        name: "Acerola",
        image: "/images/produtos/acerola1.JPG",
      },
      {
        name: "Alface",
        image: "/images/produtos/alface.JPG",
      },
      {
        name: "Banana",
        image: "/images/produtos/banana.JPG",
      },
      {
        name: "Batata Baroa",
        image: "/images/produtos/batatabaroa.JPG",
      },
      {
        name: "Coco",
        image: "/images/produtos/coco.JPG",
      },
      {
        name: "Jerimum",
        image: "/images/produtos/jerimum.JPG",
      },
      {
        name: "Limão",
        image: "/images/produtos/limao.JPG",
      },
      {
        name: "Maçã",
        image: "/images/produtos/maca1.JPG",
      },
      {
        name: "Macaxeira",
        image: "/images/produtos/macaxeira.JPG",
      },
      {
        name: "Mamão",
        image: "/images/produtos/mamao.JPG",
      },
      {
        name: "Manga",
        image: "/images/produtos/manga.JPG",
      },
      {
        name: "Melão",
        image: "/images/produtos/melao1.JPG",
      },
      {
        name: "Pimentão",
        image: "/images/produtos/pimentao.JPG",
      },
    ],
  },

  {
    id: "mercearia",
    label: "Mercearia",
    icon: ShoppingBasket,
    description:
      "Itens essenciais para sua despensa.",
    products: [
      {
        name: "Aveia e Cereais",
        image: "/images/produtos/mercearia/aveiaecereais.JPG",
      },
      {
        name: "Café",
        image: "/images/produtos/mercearia/cafe.JPG",
      },
      {
        name: "Café Tradicional",
        image: "/images/produtos/mercearia/cafe2.JPG",
      },
      {
        name: "Chá",
        image: "/images/produtos/mercearia/cha.JPG",
      },
      {
        name: "Chá e Granola",
        image: "/images/produtos/mercearia/chaegranola.JPG",
      },
      {
        name: "Leite",
        image: "/images/produtos/mercearia/leite.JPG",
      },
      {
        name: "Milho e Maionese",
        image: "/images/produtos/mercearia/milhoemaionese.JPG",
      },
      {
        name: "Panetone",
        image: "/images/produtos/mercearia/panetone (2).JPG",
      },
    ],
  },

  {
    id: "frios",
    label: "Frios",
    icon: Milk,
    description:
      "Queijos, presuntos e derivados.",
    products: [
      {
        name: "Mussarela",
        image: "/produtos/frios/mussarela.jpg",
      },
      {
        name: "Presunto",
        image: "/produtos/frios/presunto.jpg",
      },
    ],
  },

  {
    id: "acougue",
    label: "Açougue",
    icon: Beef,
    description:
      "Carnes selecionadas para sua família.",
    products: [
      {
        name: "Charque",
        image: "/sobre/flavio-charque2.jpg",
      },
      {
        name: "Frango",
        image: "/produtos/acougue/frango.jpg",
      },
      {
        name: "Costela",
        image: "/produtos/acougue/costela.jpg",
      },
    ],
  },

  {
    id: "bebidas",
    label: "Bebidas",
    icon: Wine,
    description:
      "Refrigerantes, sucos, águas e outras bebidas.",
    products: [],
  },

  {
    id: "limpeza",
    label: "Limpeza",
    icon: Sparkles,
    description:
      "Produtos para limpeza e cuidado da casa.",
    products: [],
  },

  {
    id: "utilidades",
    label: "Utilidades",
    icon: Package,
    description:
      "Itens que facilitam o dia a dia.",
    products: [],
  },

  {
    id: "racao",
    label: "Ração",
    icon: Dog,
    description:
      "Alimentação e cuidados para seus pets.",
    products: [],
  },
];
