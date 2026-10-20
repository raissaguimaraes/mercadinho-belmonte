import Image from "next/image";
import Link from "next/link";

export function AboutPreview() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 md:items-center">
        <div>
          <div className="mx-auto max-w-sm overflow-hidden rounded-3xl shadow-lg">
            <Image
              src="/images/sobre/vendedor.jpg"
              alt="Mercadinho Belmonte"
              width={700}
              height={500}
              className="h-[320px] w-full object-cover"
            />
          </div>
        </div>

        <div>
          <span className="text-sm font-semibold uppercase tracking-wider text-green-700">
            Sobre o Belmonte
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Há mais de 4 anos fazendo parte da rotina de Boa Viagem
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            O Mercadinho Belmonte oferece hortifruti selecionado, variedade de
            produtos e atendimento próximo para tornar as compras do dia a dia
            mais práticas para sua família.
          </p>

          <Link
            href="/sobre"
            className="mt-8 inline-flex rounded-full border border-slate-300 px-6 py-3 font-medium text-slate-800 transition-colors hover:bg-slate-50"
          >
            Conheça Nossa História
          </Link>
        </div>
      </div>
    </section>
  );
}