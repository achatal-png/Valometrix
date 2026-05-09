import { Suspense } from "react";
import { AbonnementPageClient } from "./page-client";

export default function AbonnementPage() {
  return (
    <Suspense fallback={<AbonnementPageFallback />}>
      <AbonnementPageClient />
    </Suspense>
  );
}

function AbonnementPageFallback() {
  return (
    <section className="mx-auto w-full max-w-3xl space-y-4">
      <header className="glass-panel rounded-2xl border p-5">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--muted)]">
          Checkout mock
        </p>
        <h1 className="font-display mt-2 text-2xl text-[color:var(--foreground)] md:text-3xl">
          Abonnement Valometrix
        </h1>
        <p className="mt-2 text-sm text-[color:var(--muted)]">Chargement du module...</p>
      </header>
    </section>
  );
}