import { ModulePage } from "@/components/modules/module-page";

export default function KpisPage() {
  return (
    <ModulePage
      title="KPIs"
      subtitle="Suivi des indicateurs cles pour la performance financiere."
      highlights={["Rentabilite", "Liquidite", "Endettement", "Croissance"]}
    />
  );
}
