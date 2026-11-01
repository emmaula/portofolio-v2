import Link from "next/link";
import Hero from "@/components/Hero";
import ProyekCard from "@/components/Proyekcard";
import SkillCard from "@/components/SkillCard"

const skills = [
  { nama: "HTML", level: "Menengah" },
  { nama: "CSS", level: "Menengah" },
  { nama: "JavaScript", level: "Dasar" },
  { nama: "Git dan GitHub", level: "Dasar" },
];

const proyek = [
  {
    slug: "project-1",
    nama: "Website Biodata",
    deskripsi: "Website biodata pribadi menggunakan HTML dan CSS.",
    gambar: "/proyek1.png",
  },
  {
    slug: "project-2",
    nama: "Website Profil",
    deskripsi: "Website profil interaktif menggunakan JavaScript.",
    gambar: "/proyek2.png",
  },
  {
    slug: "project-3",
    nama: "Portfolio Next.js",
    deskripsi: "Website portofolio pribadi menggunakan Next.js.",
    gambar: "/proyek3.png",
  },
];

const proyekTerbaru = proyek.slice(-3);

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f0f8ed] px-6 py-10 font-sans text-[#203b60]">
      <div className="mx-auto max-w-6xl">

        <Hero />

        <section className="mt-10">
          <h2 className="mb-4 text-2xl font-bold">
            Keahlian
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {skills.map((skill) => (
              <SkillCard
                key={skill.nama}
                nama={skill.nama}
                level={skill.level}
             />
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="mb-4 text-2xl font-bold">
            Proyek Terbaru
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {proyekTerbaru.map((item) => (
              <ProyekCard
                key={item.slug}
                proyek={item}
              />
            ))}
          </div>

          <Link
            href="/proyek"
            className="mt-6 inline-block rounded-lg bg-[#203b60] px-5 py-2 font-semibold text-white"
          >
            Lihat semua proyek
          </Link>
        </section>

      </div>
    </main>
  );
}