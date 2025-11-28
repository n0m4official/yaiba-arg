import fs from "fs";
import path from "path";

interface ArchiveMeta {
  id: string;
  title: string;
  description: string;
  locked: boolean;
}

export default function ArchiveIndex() {
  const archivesDir = path.join(process.cwd(), "content/archives");

  const archives = fs.readdirSync(archivesDir)
    .filter((file) => file.endsWith(".json"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(archivesDir, file), "utf-8");
      return JSON.parse(raw) as ArchiveMeta;
    });

  return (
    <main>
      <h1 className="text-4xl font-bold mb-6 tracking-wide">ARCHIVE DIRECTORY</h1>

      <p className="opacity-80 mb-8">
        Select a category to view available files.  
        Locked categories will require keys.
      </p>

      <div className="space-y-5">
        {archives.map((archive) => (
          <a
            key={archive.id}
            href={`/archives/${archive.id}`}
            className="block p-5 rounded border border-[#0aff9d55] hover:bg-[#0aff9d11] transition"
          >
            <h2 className="text-2xl">
              {archive.title}{" "}
              {archive.locked && (
                <span className="text-red-500 opacity-70">(LOCKED)</span>
              )}
            </h2>

            <p className="opacity-70 text-sm mt-1">{archive.description}</p>
          </a>
        ))}
      </div>

      <footer className="opacity-40 text-xs mt-20">
        INDEX GENERATED FROM LOCAL METADATA  
      </footer>
    </main>
  );
}
