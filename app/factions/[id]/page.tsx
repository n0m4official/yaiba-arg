"use server";

import fs from "fs";
import path from "path";

export default async function FactionView({ params }: { params: { id: string } }) {
  const filePath = path.join(
    process.cwd(),
    "content/factions",
    `${params.id}.json`
  );

  if (!fs.existsSync(filePath)) {
    return <main>Faction not found.</main>;
  }

  const data = JSON.parse(fs.readFileSync(filePath, "utf8"));

  return (
    <main>
      <h1 className="text-3xl mb-4">{data.title || data.id}</h1>
      <p className="opacity-50">Faction data pending approval.</p>
    </main>
  );
}
