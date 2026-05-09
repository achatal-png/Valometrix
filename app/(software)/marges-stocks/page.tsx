import { ModulePage } from "@/components/modules/module-page";

export default function MargesStocksPage() {
  return (
    <ModulePage
      title="Marges & Stocks"
      subtitle="Analyse des marges, rotation des stocks et seuils critiques."
      highlights={["Marges brutes", "Marges nettes", "Rotation stock", "Risque rupture"]}
    />
  );
}
