export default function IdeasPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Ideas</h1>
        <a
          href="/ideas/new"
          className="rounded-md bg-zinc-900 px-4 py-2 text-sm text-white font-medium hover:bg-zinc-700"
        >
          + Propose an idea
        </a>
      </div>
      {/* Filters + list — to be built out */}
      <p className="text-sm text-zinc-400">Coming soon…</p>
    </main>
  );
}
