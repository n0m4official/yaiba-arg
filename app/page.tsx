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

        <TerminalLink
          href="/archives"
          title="ARCHIVES DIRECTORY →"
          desc="Access recovered files and classified materials."
        />

        <TerminalLink
          href="/unlock"
          title="UNLOCK TERMINAL →"
          desc="Submit keys to gain deeper system access."
        />

        <TerminalLink
          href="/factions"
          title="FACTION INDEX →"
          desc="Cross-reference active groups and entities."
        />

        <TerminalLink 
          href="/missions" 
          title="MISSIONS →" 
          desc="View pending operations." 
        />

        <TerminalLink 
          href="/logs" 
          title="LOGS →" 
          desc="View logs." 
        />

        <TerminalLink 
          href="/characters" 
          title="CHARACTERS →" 
          desc="View characters." 
        />
      </div>

      <footer className="opacity-40 text-xs mt-20">
        SYSTEM STATUS: ONLINE  
        <br />  
        REVISION: 0.5.0  
      </footer>
    </main>
  );
}

function TerminalLink({
  href,
  title,
  desc,
}: {
  href: string;
  title: string;
  desc: string;
}) {
  return (
    <Link
      href={href}
      className="block border border-[#0aff9d55] p-4 rounded hover:bg-[#0aff9d11] transition"
    >
      <h2 className="text-2xl">{title}</h2>
      <p className="opacity-70 text-sm">{desc}</p>
    </Link>
  );
}
