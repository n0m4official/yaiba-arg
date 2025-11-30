"use server";

import fs from "fs";
import path from "path";

export default async function MissionsIndex() {
  const dir = path.join(process.cwd(), "content/missions");

  const files = fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".json"))
    .map((f) => JSON.parse(fs.readFileSync(path.join(dir, f), "utf8")));

  return (
    <main>
      <h1 className="text-3xl mb-4">Missions</h1>
      <p className="opacity-60 mb-8">Mission data is not yet available.</p>

      {files.map((m) => (
        <a
          key={m.id}
          href={`/missions/${m.id}`}
          className="block border p-4 rounded mb-3 opacity-70 hover:bg-[#0aff9d11]"
        >
          {m.title || m.id}
        </a>
      ))}
    </main>
  );
}
