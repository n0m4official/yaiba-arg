"use server";

import fs from "fs";
import path from "path";

export default async function CharacterView({ params }: { params: { id: string } }) {
  const filePath = path.join(
    process.cwd(),
    "content/characters",
    `${params.id}.json`
  );

  if (!fs.existsSync(filePath)) {
    return <main>Character not found.</main>;
  }

  const data = JSON.parse(fs.readFileSync(filePath, "utf8"));

  return (
    <main>
      <h1 className="text-3xl mb-4">{data.title || data.id}</h1>
      <p className="opacity-50">Character data pending team approval.</p>
    </main>
  );
}
