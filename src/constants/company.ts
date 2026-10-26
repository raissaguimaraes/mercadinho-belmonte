export const company = {
  name: "Mercadinho Belmonte",

  phone: "(81) 99751-0044",

  whatsapp: {
    number: "5581997510044",
    label: "(81) 99751-0044",
    url: "https://wa.me/5581997510044",
  },

  address: {
    street: "Rua Antônio Vicente",
    number: "129",
    neighborhood: "Boa Viagem",
    city: "Recife",
    state: "PE",
    zipCode: "51030-480",

    fullAddress:
      "Rua Antônio Vicente, 129 - Boa Viagem, Recife - PE, CEP 51030-480",
  },

  hours: {
    store: {
      title: "Loja Física",

      mondayToSaturday: {
        label: "Segunda a Sábado",
        opening: "06:00",
        closing: "20:00",
      },

      sunday: {
        label: "Domingo",
        opening: "07:00",
        closing: "13:00",
      },
    },

    delivery: {
      title: "Delivery",

      orderWindow: {
        label: "Pedidos",
        opening: "07:00",
        closing: "12:00",
      },

      deliveryWindow: {
        label: "Entregas",
        opening: "07:00",
        closing: "15:00",
      },
    },
  },

  payments: {
    store: {
      title: "Loja Física",

      methods: [
        "Dinheiro",
        "Pix",
        "Cartão de Débito",
        "Cartão de Crédito",
        "Vale Alimentação",
      ],
    },

    delivery: {
      title: "Delivery",

      methods: [
        "Pix",
        "Cartão de Débito",
        "Cartão de Crédito",
      ],

      notes: [
        "Não aceitamos dinheiro no delivery.",
      ],
    },
  },

  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Rua+Antônio+Vicente+129+Boa+Viagem+Recife+PE",

  mapEmbedUrl:
    "https://www.google.com/maps?q=Rua%20Ant%C3%B4nio%20Vicente%20129%20Boa%20Viagem%20Recife%20PE&output=embed",

  slogan:
    "Frutas, verduras e legumes frescos todos os dias para sua família.",

  socials: {
    instagram: "https://www.instagram.com/mercadinho_belmonte/",
    facebook: "",
  },
} as const;