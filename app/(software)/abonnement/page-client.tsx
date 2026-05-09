"use client";

import { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const PLAN_PRICE = "39EUR/mois";

export function AbonnementPageClient() {
  const searchParams = useSearchParams();
  const [isConfirmed, setIsConfirmed] = useState(false);
  const targetModule = searchParams.get("module") ?? "Ce module";

  return (
    <section className="mx-auto w-full max-w-3xl space-y-4">
      <header className="glass-panel rounded-2xl border p-5">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--muted)]">
          Checkout mock
        </p>
        <h1 className="font-display mt-2 text-2xl text-[color:var(--foreground)] md:text-3xl">
          Abonnement Valometrix
        </h1>
        <p className="mt-2 text-sm text-[color:var(--muted)]">
          Active l'acces au module{" "}
          <span className="font-semibold text-[color:var(--foreground)]">{targetModule}</span> avec une offre unique.
        </p>
      </header>

      <Card className="border-[color:var(--border)] bg-white/95">
        <CardHeader>
          <CardTitle className="flex items-center justify-between gap-2 text-[color:var(--foreground)]">
            Plan Premium Module
            <span className="rounded-full border border-[color:var(--accent)]/50 bg-[color:var(--accent)]/10 px-2.5 py-1 text-xs font-medium text-[color:var(--accent)]">
              {PLAN_PRICE}
            </span>
          </CardTitle>
          <CardDescription className="text-[color:var(--muted)]">
            Facturation mensuelle, sans engagement. Simulation checkout pour la phase MVP.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-xl border bg-[color:var(--sage-soft)]/50 p-3 text-sm text-[color:var(--foreground)]">
            <p className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-[color:var(--primary)]" />
              Paiement securise (simulation)
            </p>
            <p className="mt-2 text-[color:var(--muted)]">
              Cette etape simule un checkout Stripe pour valider le parcours produit.
            </p>
          </div>

          {isConfirmed ? (
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-3 text-sm text-emerald-700">
              <p className="flex items-center gap-2 font-medium">
                <CheckCircle2 className="h-4 w-4" />
                Abonnement active (mock)
              </p>
              <p className="mt-1">Le module est maintenant disponible dans ton dashboard.</p>
            </div>
          ) : null}

          <div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
            <Button variant="ghost" asChild type="button">
              <Link href="/tableau-de-bord">Retour dashboard</Link>
            </Button>
            <Button
              type="button"
              className="bg-[color:var(--accent)] text-[color:var(--accent-foreground)] hover:brightness-95"
              onClick={() => setIsConfirmed(true)}
            >
              Confirmer l'abonnement (mock)
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
