"use server";

import fs from "fs";
import path from "path";

export default async function LogsIndex() {
  const dir = path.join(process.cwd(), "content/logs");

  const files = fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".json"))
    .map((f) => JSON.parse(fs.readFileSync(path.join(dir, f), "utf8")));

  return (
    <main>
      <h1 className="text-3xl mb-4">Logs</h1>
      <p className="opacity-60 mb-8">Logs will be added later.</p>

      {files.map((l) => (
        <a
          key={l.id}
          href={`/logs/${l.id}`}
          className="block border p-4 rounded mb-3 opacity-70 hover:bg-[#0aff9d11]"
        >
          {l.title || l.id}
        </a>
      ))}
    </main>
  );
}
