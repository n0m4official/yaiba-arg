import fs from "fs";
import path from "path";

interface ArchiveMeta {
  id: string;
  title: string;
  description: string;
  locked: boolean;
}

export default function ArchiveViewer({ params }: { params: { id: string } }) {
  const filePath = path.join(process.cwd(), "content/archives", `${params.id}.json`);

  if (!fs.existsSync(filePath)) {
    return <div>Archive not found.</div>;
  }

  const meta = JSON.parse(fs.readFileSync(filePath, "utf8")) as ArchiveMeta;

  return (
    <main>
      <h1 className="text-3xl mb-4">{meta.title}</h1>

      {meta.locked ? (
        <p className="text-red-400">This archive is locked. Key required.</p>
      ) : (
        <p>{meta.description}</p>
      )}

      <p className="mt-6 opacity-50 text-sm">
        Archive ID: {meta.id}
      </p>
    </main>
  );
}
