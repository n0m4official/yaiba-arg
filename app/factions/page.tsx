"use server";

import fs from "fs";
import path from "path";

export default async function FactionsIndex() {
  const dir = path.join(process.cwd(), "content/factions");

  const files = fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".json"))
    .map((f) => JSON.parse(fs.readFileSync(path.join(dir, f), "utf8")));

  return (
    <main>
      <h1 className="text-3xl mb-4">Factions</h1>
      <p className="opacity-60 mb-8">Faction structure will be added later.</p>

      {files.length === 0 && (
        <p className="opacity-40 italic">No faction entries found.</p>
      )}

      {files.map((fa) => (
        <a
          key={fa.id}
          href={`/factions/${fa.id}`}
          className="block border p-4 rounded mb-3 opacity-70 hover:bg-[#0aff9d11]"
        >
          {fa.title || fa.id}
        </a>
      ))}
    </main>
  );
}
