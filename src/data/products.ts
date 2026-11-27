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
        image: "/images/produtos/hortifruti/acerola1.JPG",
      },
      {
        name: "Alface",
        image: "/images/produtos/hortifruti/alface.JPG",
      },
      {
        name: "Banana",
        image: "/images/produtos/hortifruti/banana.JPG",
      },
      {
        name: "Batata Baroa",
        image: "/images/produtos/hortifruti/batatabaroa.JPG",
      },
      {
        name: "Coco",
        image: "/images/produtos/hortifruti/coco.JPG",
      },
      {
        name: "Jerimum",
        image: "/images/produtos/hortifruti/jerimum.JPG",
      },
      {
        name: "Limão",
        image: "/images/produtos/hortifruti/limao.JPG",
      },
      {
        name: "Maçã",
        image: "/images/produtos/hortifruti/maca2.JPG",
      },
      {
        name: "Macaxeira",
        image: "/images/produtos/hortifruti/macaxeira.JPG",
      },
      {
        name: "Mamão",
        image: "/images/produtos/hortifruti/mamao.JPG",
      },
      {
        name: "Manga",
        image: "/images/produtos/hortifruti/manga.JPG",
      },
      {
        name: "Melão",
        image: "/images/produtos/hortifruti/melao1.JPG",
      },
      {
        name: "Pimentão",
        image: "/images/produtos/hortifruti/pimentao.JPG",
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
    "Queijos, manteigas, iogurtes e derivados.",
  products: [
    {
      name: "Coalhada",
      image: "/images/produtos/frios/coalhada.JPG",
    },
    {
      name: "Iogurte",
      image: "/images/produtos/frios/iogurte2.JPG",
    },
    {
      name: "Manteiga",
      image: "/images/produtos/frios/manteiga1.JPG",
    },
    {
      name: "Margarina",
      image: "/images/produtos/frios/margarina1.JPG",
    },
    {
      name: "Peito de Peru",
      image: "/images/produtos/frios/peitodeperu.JPG",
    },
    {
      name: "Presunto de Peru",
      image: "/images/produtos/frios/presuntoperu.JPG",
    },
    {
      name: "Queijo Coalho",
      image: "/images/produtos/frios/queijocoalho.JPG",
    },
    {
      name: "Queijo do Reino",
      image: "/images/produtos/frios/queijodoreino.JPG",
    },
    {
      name: "Queijo Gorgonzola",
      image: "/images/produtos/frios/queijogorgonzola.JPG",
    },
    {
      name: "Queijo Gouda",
      image: "/images/produtos/frios/queijogouda.JPG",
    },
    {
      name: "Queijo Mussarela",
      image: "/images/produtos/frios/queijomussarela.JPG",
    },
    {
      name: "Queijo Parmesão",
      image: "/images/produtos/frios/queijoparmesao1.JPG",
    },
    {
      name: "Queijo Prato",
      image: "/images/produtos/frios/queijoprato.JPG",
    },
    {
      name: "Yakult",
      image: "/images/produtos/frios/yakult.JPG",
    },
  ],
},
{
  id: "acougue",
  label: "Açougue",
  icon: Beef,
  description:
    "Carnes, pescados e produtos selecionados.",
  products: [
    {
      name: "Camarão",
      image: "/images/produtos/acougue/camarao.JPG",
    },
    {
      name: "Carne Moída",
      image: "/images/produtos/acougue/carnemoida.JPG",
    },
    {
      name: "Charque",
      image: "/images/produtos/acougue/charque5.NEF",
    },
    {
      name: "Filé de Merluza",
      image: "/images/produtos/acougue/filemerluza.JPG",
    },
    {
      name: "Filé de Tilápia",
      image: "/images/produtos/acougue/filetilapia.JPG",
    },
    {
      name: "Linguiça",
      image: "/images/produtos/acougue/linguica.JPG",
    },
    {
      name: "Salmão",
      image: "/images/produtos/acougue/salmao.JPG",
    },
  ],
},
  {
  id: "bebidas",
  label: "Bebidas",
  icon: Wine,
  description:
    "Refrigerantes, cervejas, sucos e bebidas diversas.",
  products: [
    {
      name: "Bebidas Alcoólicas",
      image: "/images/produtos/bebidas/bebidasalcoolicas1.JPG",
    },
    {
      name: "Bebidas Geladas",
      image: "/images/produtos/bebidas/bebidasgeladas.JPG",
    },
    {
      name: "Cachaça",
      image: "/images/produtos/bebidas/cachaca.JPG",
    },
    {
      name: "Cerveja",
      image: "/images/produtos/bebidas/cerveja.JPG",
    },
    {
      name: "Coca-Cola",
      image: "/images/produtos/bebidas/cocacola.JPG",
    },
    {
      name: "Refrigerantes",
      image: "/images/produtos/bebidas/refrigerante.JPG",
    },
    {
      name: "Sucos e Bebidas",
      image:
        "/images/produtos/bebidas/sucosebebidasmelacool.JPG",
    },
    {
      name: "Toddynho",
      image: "/images/produtos/bebidas/toddynho.JPG",
    },
  ],
},
  {
  id: "limpeza",
  label: "Limpeza",
  icon: Sparkles,
  description:
    "Produtos para limpeza e cuidado da casa.",
  products: [
    {
      name: "Água Sanitária",
      image: "/images/produtos/limpeza/aguasanitaria - Copia.JPG",
    },
    {
      name: "Desinfetante",
      image: "/images/produtos/limpeza/desinfetante - Copia.JPG",
    },
    {
      name: "Desengordurante",
      image: "/images/produtos/limpeza/desengordurante - Copia.JPG",
    },
    {
      name: "Detergente",
      image: "/images/produtos/limpeza/detergente - Copia.JPG",
    },
    {
      name: "Esponja de Prato",
      image: "/images/produtos/limpeza/esponjadeprato - Copia.JPG",
    },
    {
      name: "Fósforo",
      image: "/images/produtos/limpeza/fosforo - Copia.JPG",
    },
    {
      name: "Limpeza Geral",
      image: "/images/produtos/limpeza/limpeza1 - Copia.JPG",
    },
    {
      name: "Omo",
      image: "/images/produtos/limpeza/omo - Copia.JPG",
    },
    {
      name: "Papel Higiênico",
      image: "/images/produtos/limpeza/papelhigienico - Copia.JPG",
    },
    {
      name: "Produtos de Higiene",
      image: "/images/produtos/limpeza/produtoshigiene - Copia.JPG",
    },
    {
      name: "Produtos de Limpeza",
      image: "/images/produtos/limpeza/produtoslimpezadiversos - Copia.JPG",
    },
    {
      name: "Sabão",
      image: "/images/produtos/limpeza/sabao.JPG",
    },
    {
      name: "Saco de Lixo",
      image: "/images/produtos/limpeza/sacodelixo.JPG",
    },
    {
      name: "SBP",
      image: "/images/produtos/limpeza/sbemtevi.JPG",
    },
    {
      name: "Sonho",
      image: "/images/produtos/limpeza/sonho.JPG",
    },
    {
      name: "Vanish",
      image: "/images/produtos/limpeza/vanish.JPG",
    },
    {
      name: "Veja",
      image: "/images/produtos/limpeza/veja.JPG",
    },
  ],
},{
  id: "perfumaria",
  label: "Perfumaria",
  icon: Sparkles,
  description:
    "Produtos de higiene pessoal e cuidados diários.",
  products: [
    {
      name: "Desodorante",
      image: "/images/produtos/perfumaria/desodorante.JPG",
    },
    {
      name: "Pasta de Dente",
      image: "/images/produtos/perfumaria/pastadedente.JPG",
    },
    {
      name: "Produtos de Higiene",
      image: "/images/produtos/perfumaria/produtoshigiene.JPG",
    },
    {
      name: "Sabão de Algodão",
      image: "/images/produtos/perfumaria/sabaoealgodao.JPG",
    },
    {
      name: "Sabonete",
      image: "/images/produtos/perfumaria/sabonete.JPG",
    },
    {
      name: "Shampoo e Condicionador",
      image: "/images/produtos/perfumaria/shampooecondicionador.JPG",
    },
  ],
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
