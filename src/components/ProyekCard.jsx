import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProyekCard({ proyek }) {
  const kategori = Array.isArray(proyek.kategori)
    ? proyek.kategori
    : String(proyek.kategori || "")
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean);

  return (
    <Link href={`/proyek/${proyek.slug}`} className="block rounded-2xl hover:shadow-md">
      <Card className="h-full">
        <Image
          src={proyek.gambar}
          alt={`Tangkapan layar ${proyek.judul}`}
          width={640}
          height={420}
          loading="eager"
          className="h-auto w-full"
        />
        <CardHeader>
          <div className="flex flex-wrap gap-2">
            {kategori.map((item) => (
              <Badge
                key={item}
                variant={item.toLowerCase().replace(/\./g, "")}
              >
                {item}
              </Badge>
            ))}
          </div>
          <CardTitle className="text-lg text-primary">
            {proyek.judul}
          </CardTitle>
          <CardDescription>{proyek.deskripsi}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}