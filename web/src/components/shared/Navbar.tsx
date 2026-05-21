import Link from "next/link";
import { auth } from "@/lib/auth";
import { getInitials } from "@/lib/utils";

export default async function Navbar() {
  const session = await auth();

  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-6">
          <Link href="/" className="text-lg font-bold tracking-tight">
            InnoDAY
          </Link>
          <nav className="flex items-center gap-4 text-sm text-zinc-600">
            <Link href="/ideas" className="hover:text-zinc-900">Ideas</Link>
            <Link href="/challenges" className="hover:text-zinc-900">Challenges</Link>
            <Link href="/archives" className="hover:text-zinc-900">Archives</Link>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          {/* @ts-expect-error — isAdmin custom field */}
          {session?.user?.isAdmin && (
            <Link href="/admin" className="text-sm text-zinc-500 hover:text-zinc-900">
              ⚙ Admin
            </Link>
          )}
          {session?.user ? (
            <Link href="/profile">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-200 text-xs font-semibold text-zinc-700">
                {getInitials(session.user.name)}
              </div>
            </Link>
          ) : (
            <Link
              href="/login"
              className="rounded-md bg-zinc-900 px-3 py-1.5 text-sm text-white hover:bg-zinc-700"
            >
              Sign in
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
