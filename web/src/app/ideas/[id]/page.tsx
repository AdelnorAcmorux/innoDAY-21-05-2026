export default function IdeaDetailPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <a href="/ideas" className="mb-6 inline-block text-sm text-zinc-500 hover:underline">
        ← Back to ideas
      </a>
      <h1 className="text-2xl font-bold">Idea detail</h1>
      <p className="text-sm text-zinc-400">ID: {params.id} — Coming soon…</p>
    </main>
  );
}
