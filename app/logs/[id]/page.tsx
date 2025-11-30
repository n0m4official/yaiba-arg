"use server";

import fs from "fs";
import path from "path";

export default async function LogView({ params }: { params: { id: string } }) {
  const filePath = path.join(
    process.cwd(),
    "content/logs",
    `${params.id}.json`
  );

  if (!fs.existsSync(filePath)) {
    return <main>Log not found.</main>;
  }

  return (
    <main>
      <h1 className="text-3xl mb-4">{params.id}</h1>
      <p className="opacity-50">Log content pending upload.</p>
    </main>
  );
}
