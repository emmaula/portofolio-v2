import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { proyek } from "@/data/proyek";

export function generateStaticParams() {
  return proyek.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const item = proyek.find((project) => project.slug === slug);

  if (!item) {
    return { title: "Proyek tidak ditemukan" };
  }
  return { title: item.judul, description: item.deskripsi };
}

export default async function DetailProyek({ params }) {
  const { slug } = await params;
  const item = proyek.find((project) => project.slug === slug);

  if (!item) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <Link
        href="/proyek"
        className="text-sm font-semibold text-red-600 hover:text-red-700 hover:underline"
      >
        &larr; Kembali ke daftar proyek
      </Link>
      <h1 className="mt-4 text-3xl font-bold text-primary md:text-4xl">
        {item.judul}
      </h1>
      <div className="mt-3 flex items-center gap-3">
        <Badge>{item.kategori}</Badge>
        <span className="text-muted-foreground">Dibuat di {item.minggu}</span>
      </div>
      <Image
        src={item.gambar}
        alt={`Tangkapan layar ${item.judul}`}
        width={640}
        height={420}
        loading="eager"
        className="mt-6 h-auto w-full rounded-xl border border-border"
      />

      <p className="mt-6 text-lg">{item.ringkasan || item.deskripsi}</p>

      <Separator className="my-8" />
      <h2 className="text-2xl font-bold text-primary">Yang Saya Pelajari</h2>
      <ul className="mt-3 list-disc pl-5">
        {(item.halYangDipelajari || item.fitur || []).map((learned) => (
          <li key={learned}>{learned}</li>
        ))}
      </ul>
    </main>
  );
}