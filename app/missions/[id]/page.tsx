"use server";

import fs from "fs";
import path from "path";

export default async function MissionView({ params }: { params: { id: string } }) {
  const filePath = path.join(
    process.cwd(),
    "content/missions",
    `${params.id}.json`
  );

  if (!fs.existsSync(filePath)) {
    return <main>Mission not found.</main>;
  }

  return (
    <main>
      <h1 className="text-3xl mb-4">{params.id}</h1>
      <p className="opacity-50">Mission content will be added later.</p>
    </main>
  );
}
