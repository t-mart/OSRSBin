"use client";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { useRouter } from "next/navigation";

export default function SearchSection() {
  const router = useRouter();

  return (
    <section className="text-center">
      <h2 className="font-runescape text-6xl leading-[4.5rem] leading text-primary">
        Search Tile Packs
      </h2>
      <p className="">Browse tile packs uploaded by users just like you!</p>
      <form className="flex justify-center gap-2 mt-6">
        <Input placeholder="Search for tile packs" sz="lg" />
        <Button
          type="submit"
          variant="secondary"
          size="lg"
          onClick={() => router.push("/tilepacks")}
        >
          Search
        </Button>
      </form>
    </section>
  );
}
