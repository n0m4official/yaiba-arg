import fs from "fs";
import path from "path";

interface ArchiveMeta {
  id: string;
  title: string;
  description: string;
  locked: boolean;
}

export default function ArchivesHome() {
  const contentPath = path.join(process.cwd(), "content/archives");

  const files = fs.readdirSync(contentPath)
    .filter(file => file.endsWith(".json"))
    .map(file => {
      const raw = fs.readFileSync(path.join(contentPath, file), "utf-8");
      return JSON.parse(raw) as ArchiveMeta;
    });

  return (
    <main>
      <h1 className="text-3xl mb-6">ARCHIVE DIRECTORY</h1>

      <ul className="space-y-4">
        {files.map((meta) => (
          <li key={meta.id} className="border border-[#0aff9d55] p-4 rounded">
            <a href={`/archives/${meta.id}`}>

              <h2 className="text-xl">
                {meta.title} {meta.locked && <span className="opacity-50">(LOCKED)</span>}
              </h2>

              <p className="text-sm opacity-70">{meta.description}</p>
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
