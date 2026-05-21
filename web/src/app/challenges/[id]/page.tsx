export default function ChallengeDetailPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <a href="/challenges" className="mb-6 inline-block text-sm text-zinc-500 hover:underline">
        ← Back to challenges
      </a>
      <h1 className="text-2xl font-bold">Challenge detail</h1>
      <p className="text-sm text-zinc-400">ID: {params.id} — Coming soon…</p>
    </main>
  );
}
