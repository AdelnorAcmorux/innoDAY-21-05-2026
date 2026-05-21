import { signIn } from "@/lib/auth";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-6 text-center">
        <h1 className="text-3xl font-bold">InnoDAY</h1>
        <p className="text-muted-foreground max-w-sm">
          Sign in with your Kontron Microsoft account to access the platform.
        </p>
        <form
          action={async () => {
            "use server";
            await signIn("microsoft-entra-id", { redirectTo: "/" });
          }}
        >
          <button
            type="submit"
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-6 py-2 font-medium"
          >
            Sign in with Microsoft 365
          </button>
        </form>
      </div>
    </main>
  );
}
