"use server";

import fs from "fs";
import path from "path";

export default async function CharactersIndex() {
    const dir = path.join(process.cwd(), "content/characters");

    const files = fs
        .readdirSync(dir)
        .filter((f) => f.endsWith(".json"))
        .map((f) => JSON.parse(fs.readFileSync(path.join(dir, f), "utf8")));

    return (
        <main>
            <h1 className="text-3xl mb-4">
                Characters
            </h1>
            <p className="opacity-60 mb-8">
                Character database is not yet populated.
            </p>

            {files.length === 0 && (
                <p className="opacity-40 italic">
                    No character entries found.
                </p>
            )}

            {files.map((ch) => (
                <a
                    key={ch.id}
                    href={`/characters/${ch.id}`}
                    className="block border p-4 rounded mb-3 opacity-7 hover:bg-[#0aff9d11]"
                >
                    {ch.title || ch.id}
                </a>
            ))}
        </main>
    )
}