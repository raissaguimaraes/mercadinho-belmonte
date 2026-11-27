import * as XLSX from "xlsx";
import * as fs from "fs";
import * as path from "path";

/*
|--------------------------------------------------------------------------
| Configuração das categorias
|--------------------------------------------------------------------------
*/

const CATEGORY_RULES = {
  hortifruti: [
    "TOMATE",
    "CEBOLA",
    "BANANA",
    "MAMAO",
    "ABACAXI",
    "GOIABA",
    "PINHA",
    "LARANJA",
    "LIMAO",
    "MANGA",
    "COCO",
    "MARACUJA",
    "CAJU",
    "MACAXEIRA",
    "BATATA",
    "CENOURA",
    "ALHO",
    "JERIMUM",
    "ALFACE",
    "COENTRO",
  ],

  frios: [
    "QUEIJO",
    "MUSS",
    "MUSSARELA",
    "PRESUNTO",
    "REQUEIJAO",
  ],

  mercearia: [
    "LEITE",
    "OVO",
    "OVOS",
    "CAFE",
    "CHA",
    "GRANOLA",
    "MAIONESE",
    "MILHO",
    "PANETONE",
    "CEREAL",
  ],

  acougue: [
    "CHARQUE",
    "CARNE",
    "FRANGO",
    "COSTELA",
    "PICANHA",
    "COXAO",
    "ALCATRA",
  ],
};

/*
|--------------------------------------------------------------------------
| Utilidades
|--------------------------------------------------------------------------
*/

function normalize(text: string): string {
  return String(text)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toUpperCase();
}

function classifyProduct(description: string): string {
  const normalized = normalize(description);

  for (const [category, keywords] of Object.entries(
    CATEGORY_RULES
  )) {
    const found = keywords.some((keyword) =>
      normalized.includes(keyword)
    );

    if (found) {
      return category;
    }
  }

  return "outros";
}

function collectImages(
  directory: string,
  images: Record<string, string>
) {
  if (!fs.existsSync(directory)) {
    return;
  }

  const items = fs.readdirSync(directory);

  for (const item of items) {
    const fullPath = path.join(directory, item);

    const stats = fs.statSync(fullPath);

    if (stats.isDirectory()) {
      collectImages(fullPath, images);
      continue;
    }

    const ext = path.extname(item).toLowerCase();

    if (
      [".jpg", ".jpeg", ".png", ".webp"].includes(ext)
    ) {
      const key = normalize(
        path.basename(item, ext)
      );

      const publicPath = fullPath
        .replace(/\\/g, "/")
        .replace(/^public/, "");

      images[key] = publicPath;
    }
  }
}

function findProductImage(
  productName: string,
  imageMap: Record<string, string>
) {
  const normalized = normalize(productName);

  const entries = Object.entries(imageMap);

  for (const [key, image] of entries) {
    if (
      normalized.includes(key) ||
      key.includes(normalized)
    ) {
      return image;
    }
  }

  return "/images/produtos/default.jpg";
}

function parseNumber(value: any): number {
  const str = String(value ?? "0")
    .replace(/\./g, "")
    .replace(",", ".");

  return Number(str) || 0;
}

/*
|--------------------------------------------------------------------------
| Ler Excel
|--------------------------------------------------------------------------
*/

const workbook = XLSX.readFile(
  "./data/curva-abc.xlsx"
);

const sheet =
  workbook.Sheets[
    workbook.SheetNames[0]
  ];

const rows: any[] =
  XLSX.utils.sheet_to_json(sheet, {
    range: 2,
  });

console.log(
  `📄 ${rows.length} linhas encontradas`
);

console.log("Primeira linha:");
console.log(rows[0]);

/*
|--------------------------------------------------------------------------
| Indexar imagens
|--------------------------------------------------------------------------
*/

const imageMap: Record<string, string> = {};

collectImages(
  "./public/images/produtos",
  imageMap
);

console.log(
  `🖼️ ${Object.keys(imageMap).length} imagens indexadas`
);

/*
|--------------------------------------------------------------------------
| Containers
|--------------------------------------------------------------------------
*/

const groupedCategories: Record<
  string,
  {
    id: string;
    label: string;
    description: string;
    products: {
      name: string;
      image: string;
    }[];
  }
> = {};

const topSellingProducts: any[] = [];

/*
|--------------------------------------------------------------------------
| Processar Curva A
|--------------------------------------------------------------------------
*/

rows.forEach((row) => {
  const curva = String(
    row["Curva"] ?? ""
  ).trim();

  if (curva !== "A") {
    return;
  }

  const rawName = String(
    row["Descrição"] ??
      row["Descricao"] ??
      ""
  ).trim();

  if (!rawName) {
    return;
  }

  const name = rawName
    .replace(/\sKG$/i, "")
    .replace(/\sUN$/i, "")
    .replace(/\sUND$/i, "")
    .trim();

  const category =
    classifyProduct(name);

  const image =
    findProductImage(
      name,
      imageMap
    );

  const product = {
    code:
      row["Codigo"] ??
      row["Código"] ??
      "",

    name,

    image,

    sales: parseNumber(
      row["*Vendas"]
    ),

    quantity: parseNumber(
      row["Qtd"]
    ),
  };

  topSellingProducts.push(product);

  if (!groupedCategories[category]) {
    groupedCategories[category] = {
      id: category,

      label:
        category.charAt(0).toUpperCase() +
        category.slice(1),

      description:
        "Produtos mais vendidos da categoria.",

      products: [],
    };
  }

  groupedCategories[
    category
  ].products.push({
    name,
    image,
  });
});

/*
|--------------------------------------------------------------------------
| Ordenar mais vendidos
|--------------------------------------------------------------------------
*/

topSellingProducts.sort(
  (a, b) => b.sales - a.sales
);

/*
|--------------------------------------------------------------------------
| Gerar products-generated.ts
|--------------------------------------------------------------------------
*/

const categoriesOutput = `
export const productCategories = ${JSON.stringify(
  Object.values(groupedCategories),
  null,
  2
)};
`;

fs.writeFileSync(
  "./src/data/products-generated.ts",
  categoriesOutput
);

/*
|--------------------------------------------------------------------------
| Gerar top-selling-generated.ts
|--------------------------------------------------------------------------
*/

const topSellingOutput = `
export const topSellingProducts = ${JSON.stringify(
  topSellingProducts.slice(0, 50),
  null,
  2
)};
`;

fs.writeFileSync(
  "./src/data/top-selling-generated.ts",
  topSellingOutput
);

/*
|--------------------------------------------------------------------------
| Logs
|--------------------------------------------------------------------------
*/

console.log(
  "✅ products-generated.ts criado"
);

console.log(
  "✅ top-selling-generated.ts criado"
);

console.log(
  `✅ ${topSellingProducts.length} produtos Classe A processados`
);