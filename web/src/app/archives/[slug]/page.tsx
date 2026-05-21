export default function ArchiveEditionPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <a href="/archives" className="mb-6 inline-block text-sm text-zinc-500 hover:underline">
        ← Back to archives
      </a>
      <h1 className="text-2xl font-bold">Edition: {params.slug}</h1>
      <p className="text-sm text-zinc-400">Coming soon…</p>
    </main>
  );
}
