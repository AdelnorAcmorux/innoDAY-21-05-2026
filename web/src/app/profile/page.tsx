import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  const session = await auth();
  if (!session) redirect("/login");

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <div className="mb-8 flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-zinc-200 text-zinc-700 font-bold text-lg">
          {session.user?.name
            ?.split(" ")
            .slice(0, 2)
            .map((n) => n[0])
            .join("") ?? "?"}
        </div>
        <div>
          <p className="font-semibold">{session.user?.name}</p>
          <p className="text-sm text-zinc-500">{session.user?.email}</p>
        </div>
      </div>

      <section className="mb-8">
        <h2 className="mb-4 text-lg font-semibold">My Ideas</h2>
        <p className="text-sm text-zinc-400">Coming soon…</p>
      </section>

      <section>
        <h2 className="mb-4 text-lg font-semibold">Challenges I joined</h2>
        <p className="text-sm text-zinc-400">Coming soon…</p>
      </section>
    </main>
  );
}
