import Image from "next/image";

export function ProdutosGallery() {
  const gallery = [
    {
      title: "Hortifruti",
      image: "/images/produtos/frutasdiversas3.jpg",
    },
    {
      title: "Açougue",
      image: "/images/produtos/acougue.jpg",
    },
    {
      title: "Frios",
      image: "/images/produtos/frios.jpg",
    },
    {
      title: "Mercearia",
      image: "/images/produtos/mercearia2.jpg",
    },
    {
      title: "Bebidas",
      image: "/images/produtos/bebidas.jpg",
    },
    {
      title: "Limpeza",
      image: "/images/produtos/limpeza.jpg",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-green-700">
            Galeria
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Qualidade em cada seção
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Conheça algumas das categorias disponíveis no Mercadinho Belmonte.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {gallery.map((item) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-3xl bg-white shadow-sm transition hover:shadow-lg"
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-5">
                <h3 className="text-xl font-semibold text-slate-900">
                  {item.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}