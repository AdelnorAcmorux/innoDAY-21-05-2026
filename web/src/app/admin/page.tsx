export default function AdminPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="mb-8 text-2xl font-bold">Admin Dashboard</h1>

      <section className="mb-8 rounded-lg border p-6">
        <h2 className="mb-4 font-semibold">Active Edition</h2>
        <p className="text-sm text-zinc-400">Coming soon…</p>
        <div className="mt-4 flex gap-3">
          <a
            href="/admin/innoday/new"
            className="rounded-md bg-zinc-900 px-4 py-2 text-sm text-white font-medium hover:bg-zinc-700"
          >
            Create next edition
          </a>
          <button className="rounded-md border px-4 py-2 text-sm font-medium hover:bg-zinc-50">
            Archive current edition
          </button>
        </div>
      </section>

      <section className="rounded-lg border p-6">
        <h2 className="mb-4 font-semibold">Flagged ideas</h2>
        <p className="text-sm text-zinc-400">No flagged ideas.</p>
      </section>
    </main>
  );
}
