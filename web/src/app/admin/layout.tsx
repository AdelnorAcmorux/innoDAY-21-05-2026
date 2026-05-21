import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  // @ts-expect-error — isAdmin is a custom session field
  if (!session || !session.user?.isAdmin) redirect("/");

  return (
    <div>
      <div className="border-b bg-zinc-50 px-4 py-2 text-sm text-zinc-500">
        Admin panel —{" "}
        <a href="/" className="underline hover:text-zinc-900">
          Back to app
        </a>
      </div>
      {children}
    </div>
  );
}
