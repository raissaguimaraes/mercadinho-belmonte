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

  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Rua+Antônio+Vicente+129+Boa+Viagem+Recife+PE",

  slogan:
    "Frutas, verduras e legumes frescos todos os dias para sua família.",

  socials: {
    instagram: "https://www.instagram.com/mercadinho_belmonte/",
    facebook: "",
  },
} as const;