import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import Link from "next/link";

export default async function HomePage() {
  const session = await auth();
  if (!session) redirect("/login");

  const activeEdition = await db.edition.findFirst({
    where: { archivedAt: null },
    orderBy: { startsAt: "desc" },
  });

  if (!activeEdition) {
    const lastEdition = await db.edition.findFirst({
      orderBy: { archivedAt: "desc" },
    });

    return (
      <main className="mx-auto max-w-2xl px-4 py-20 text-center">
        <h2 className="text-2xl font-bold">No InnoDAY currently running</h2>
        <p className="mt-3 text-zinc-500">
          Happy to see you eager to innovate, but no InnoDAY is currently
          running. Check out what was built before!
        </p>
        {lastEdition && (
          <Link
            href={`/archives/${lastEdition.slug}`}
            className="mt-6 inline-block rounded-md bg-zinc-900 px-6 py-2 text-white font-medium hover:bg-zinc-700"
          >
            View last edition: {lastEdition.name}
          </Link>
        )}
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <div className="mb-8 rounded-lg border p-6">
        <p className="text-sm text-zinc-500">Active edition</p>
        <h2 className="text-2xl font-bold">{activeEdition.name}</h2>
        <p className="text-sm text-zinc-500">
          Open until {activeEdition.endsAt.toLocaleDateString()}
        </p>
        <Link
          href="/ideas/new"
          className="mt-4 inline-block rounded-md bg-zinc-900 px-6 py-2 text-white font-medium hover:bg-zinc-700"
        >
          + Propose an idea
        </Link>
      </div>

      <section className="mb-8">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold">Active Challenges</h3>
          <Link href="/challenges" className="text-sm text-zinc-500 hover:underline">View all →</Link>
        </div>
        <p className="text-sm text-zinc-400">Coming soon…</p>
      </section>

      <section>
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold">Recent Ideas</h3>
          <Link href="/ideas" className="text-sm text-zinc-500 hover:underline">View all →</Link>
        </div>
        <p className="text-sm text-zinc-400">Coming soon…</p>
      </section>
    </main>
  );
}
