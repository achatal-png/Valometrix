import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type ModulePageProps = {
  title: string;
  subtitle: string;
  highlights: string[];
};

export function ModulePage({ title, subtitle, highlights }: ModulePageProps) {
  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
          {title}
        </h1>
        <p className="mt-1 text-sm text-slate-600 md:text-base">{subtitle}</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {highlights.map((item) => (
          <Card key={item}>
            <CardHeader>
              <CardTitle className="text-base">{item}</CardTitle>
              <CardDescription>Zone prete pour ton prochain composant metier.</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-slate-600">
              Base UI en place avec style sobre et lisible sur mobile.
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
