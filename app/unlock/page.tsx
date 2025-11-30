export default function UnlockPage() {
  return (
    <main>
      <h1 className="text-3xl mb-4">Unlock System</h1>
      <p className="opacity-60 mb-6">Key verification not implemented yet.</p>

      <form className="space-y-4">
        <input
          className="bg-black border p-2 rounded w-64"
          placeholder="Enter key..."
        />
        <button className="border px-4 py-2 rounded hover:bg-[#0aff9d11]">
          Submit
        </button>
      </form>
    </main>
  );
}
