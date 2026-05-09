import { ModulePage } from "@/components/modules/module-page";

export default function CashFlowBpPage() {
  return (
    <ModulePage
      title="Cash-flow & BP"
      subtitle="Pilotage de la tresorerie et construction du business plan."
      highlights={["Tresorerie glissante", "Previsions", "Plan de financement", "Stress test"]}
    />
  );
}
