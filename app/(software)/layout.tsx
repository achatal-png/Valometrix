import { AppShell } from "@/components/layout/app-shell";

export default function SoftwareLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AppShell>{children}</AppShell>;
}
