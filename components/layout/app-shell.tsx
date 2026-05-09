"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChartColumnBig,
  Menu,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/tableau-de-bord", label: "Tableau de bord", icon: ChartColumnBig },
];

function SidebarNav() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-1">
      {navItems.map((item) => {
        const active = pathname === item.href;
        const Icon = item.icon;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
              active
                ? "bg-slate-900 text-slate-50"
                : "text-slate-600 hover:bg-slate-100 hover:text-slate-900",
            )}
          >
            <Icon className="h-4 w-4" />
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-40 flex h-14 items-center justify-between border-b bg-white px-4 md:hidden">
        <div className="text-sm font-semibold tracking-wide text-slate-800">
          Valometrix
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" aria-label="Ouvrir la navigation">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="mt-8 space-y-4">
              <p className="text-xs uppercase tracking-wide text-slate-500">Modules</p>
              <SidebarNav />
            </div>
          </SheetContent>
        </Sheet>
      </header>

      <div className="mx-auto flex w-full max-w-screen-2xl">
        <aside className="hidden min-h-screen w-72 border-r bg-white p-6 md:block">
          <p className="mb-6 text-xs uppercase tracking-[0.2em] text-slate-500">
            Valometrix
          </p>
          <SidebarNav />
        </aside>

        <main className="w-full p-4 md:p-8">{children}</main>
      </div>
    </div>
  );
}
