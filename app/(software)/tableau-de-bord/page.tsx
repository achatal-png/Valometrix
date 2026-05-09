"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, BriefcaseBusiness, Calculator, ChartColumn, Coins, Package, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type ModuleItem = {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  isSubscribed: boolean;
};

const MODULE_PRICE = "39EUR/mois";

const modules: ModuleItem[] = [
  {
    id: "valorisation",
    title: "Valorisation",
    description: "Expertise CFO pour estimer la valeur de l'entreprise.",
    icon: BriefcaseBusiness,
    isSubscribed: true,
  },
  {
    id: "investissement",
    title: "Aide a l'Investissement",
    description: "Calcul ROI/VAN pour prioriser les decisions d'investissement.",
    icon: Calculator,
    isSubscribed: false,
  },
  {
    id: "achats-stocks",
    title: "Achats et stocks",
    description: "Suivi des approvisionnements, couts, rotations et ruptures.",
    icon: Package,
    isSubscribed: false,
  },
  {
    id: "marges",
    title: "Marges et rentabilite",
    description: "Analyse detaillee des marges par produit, segment et canal.",
    icon: TrendingUp,
    isSubscribed: true,
  },
  {
    id: "cashflow",
    title: "Business Plan - Cash flow",
    description: "Projection de tresorerie et planification financiere.",
    icon: Coins,
    isSubscribed: false,
  },
  {
    id: "pilotage",
    title: "Tableau de bord - Pilotage KPI",
    description: "Vision executive des KPIs operationnels et financiers.",
    icon: ChartColumn,
    isSubscribed: false,
  },
];

export default function DashboardPage() {
  const router = useRouter();
  const [selectedModule, setSelectedModule] = useState<ModuleItem | null>(null);
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);

  const hasActiveSubscription = useMemo(() => false, []);

  const onLaunchTool = (module: ModuleItem) => {
    if (!hasActiveSubscription) {
      setSelectedModule(module);
      setShowSubscriptionModal(true);
      return;
    }
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "luxe");
  }, []);

  return (
    <section className="space-y-6">
      <header className="glass-panel rounded-2xl border bg-gradient-to-br from-white/85 via-[color:var(--background)] to-[color:var(--sage-soft)] p-4 shadow-sm md:p-6">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--muted)]">
          Valometrix Suite
        </p>
        <h1 className="font-display mt-2 text-2xl font-semibold tracking-tight text-[color:var(--foreground)] md:text-3xl">
          Dashboard des modules financiers
        </h1>
        <p className="mt-2 max-w-3xl text-sm text-[color:var(--muted)] md:text-base">
          Accede a chaque outil metier via une offre claire et premium. Mobile-first pour un usage fluide sur iPhone et desktop.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {modules.map((module) => {
          const Icon = module.icon;
          return (
            <Card
              key={module.id}
              className="group border-[color:var(--border)] bg-white/95 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <CardHeader className="space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="rounded-xl border border-[color:var(--border)] bg-[color:var(--sage-soft)] p-2.5 transition-transform duration-300 group-hover:scale-105">
                    <Icon className="h-5 w-5 text-[color:var(--primary)]" />
                  </div>
                  <span className="rounded-full border border-[color:var(--accent)]/45 bg-[color:var(--accent)]/12 px-2.5 py-1 text-xs font-medium text-[color:var(--accent)]">
                    {MODULE_PRICE}
                  </span>
                </div>
                <div className="space-y-1">
                  <div className="mb-1 flex items-center justify-between gap-2">
                    <CardTitle className="text-base text-[color:var(--foreground)]">
                      {module.title}
                    </CardTitle>
                    <span
                      className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${
                        module.isSubscribed
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-amber-100 text-amber-700"
                      }`}
                    >
                      {module.isSubscribed ? "Abonne" : "Non abonne"}
                    </span>
                  </div>
                  <CardDescription className="text-sm leading-relaxed text-[color:var(--muted)]">
                    {module.description}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <Button
                  className="w-full justify-between bg-[color:var(--primary)] text-[color:var(--primary-foreground)] transition-all duration-200 hover:brightness-110"
                  onClick={() => onLaunchTool(module)}
                >
                  Lancer l'outil
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {showSubscriptionModal ? (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-slate-950/45 p-4 sm:items-center"
          role="dialog"
          aria-modal="true"
          aria-labelledby="subscription-modal-title"
        >
          <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-[color:var(--accent)]">
              Abonnement requis
            </p>
            <h2
              id="subscription-modal-title"
              className="mt-2 text-lg font-semibold text-[color:var(--foreground)]"
            >
              {selectedModule?.title ?? "Ce module"}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-[color:var(--muted)]">
              Ce module necessite un abonnement actif a 39EUR/mois.
            </p>

            <div className="mt-5 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
              <Button
                variant="ghost"
                className="w-full sm:w-auto"
                onClick={() => setShowSubscriptionModal(false)}
              >
                Fermer
              </Button>
              <Button
                className="w-full bg-[color:var(--accent)] text-[color:var(--accent-foreground)] transition-all duration-200 hover:brightness-95 sm:w-auto"
                onClick={() => {
                  const moduleQuery = encodeURIComponent(selectedModule?.title ?? "module");
                  setShowSubscriptionModal(false);
                  router.push(`/abonnement?module=${moduleQuery}`);
                }}
              >
                S'abonner
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
