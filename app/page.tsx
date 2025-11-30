import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-start justify-start p-10">
      <h1 className="text-4xl font-bold mb-6 tracking-wide">
        YAIBA // ARCHIVE TERMINAL
      </h1>

      <p className="opacity-80 max-w-2xl mb-10">
        Unauthorized access is prohibited.  
        All interactions are logged.  
        Proceed with caution.
      </p>

      <div className="space-y-4">
        <Link
          href="/archives"
          className="block border border-[#0aff9d55] p-4 rounded hover:bg-[#0aff9d11] transition"
        >
          <h2 className="text-2xl">ARCHIVES DIRECTORY →</h2>
          <p className="opacity-70 text-sm">Access recovered files and classified materials.</p>
        </Link>

        <Link
          href="/unlock"
          className="block border border-[#0aff9d55] p-4 rounded hover:bg-[#0aff9d11] transition"
        >
          <h2 className="text-2xl">UNLOCK TERMINAL →</h2>
          <p className="opacity-70 text-sm">Submit keys to gain deeper system access.</p>
        </Link>

        <Link
          href="/factions"
          className="block border border-[#0aff9d55] p-4 rounded hover:bg-[#0aff9d11] transition"
        >
          <h2 className="text-2xl">FACTION INDEX →</h2>
          <p className="opacity-70 text-sm">Cross-reference active groups and entities.</p>
        </Link>
      </div>

      <footer className="opacity-40 text-xs mt-20">
        SYSTEM STATUS: ONLINE  
        <br />  
        REVISION: 0.1.0  
      </footer>
    </main>
  );
}
