"use server";

import fs from "fs";
import path from "path";

interface ArchiveMeta {
  id: string;
  title: string;
  description: string;
  locked: boolean;
}

export default async function ArchiveView({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const filePath = path.join(
    process.cwd(),
    "content/archives",
    `${id}.json`
  );

  console.log("DEBUG: Checking path:", filePath);
  console.log("DEBUG: Exists?:", fs.existsSync(filePath));
  console.log("DEBUG: Current working directory:", process.cwd());

  if (!fs.existsSync(filePath)) {
    return <div>Archive not found.</div>;
  }

  const archive = JSON.parse(fs.readFileSync(filePath, "utf-8")) as ArchiveMeta;

  return (
    <main>
      <h1 className="text-4xl font-bold mb-4 tracking-wide">
        {archive.title}
      </h1>

      <p className="opacity-70 mb-6">{archive.description}</p>

      {archive.locked ? (
        <div className="text-red-400">This archive is locked. Key required.</div>
      ) : (
        <div className="opacity-50">Archive unlocked. (No files yet.)</div>
      )}

      <footer className="opacity-40 text-xs mt-20">
        ARCHIVE ID: {archive.id}
      </footer>
    </main>
  );
}
