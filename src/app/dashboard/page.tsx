import { LayoutGrid } from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="flex flex-col h-full">
      <header className="bg-background border-b p-4 flex items-center gap-4">
        <LayoutGrid className="size-6 text-primary" />
        <h1 className="text-xl font-semibold font-headline">Dashboard</h1>
      </header>
      <main className="flex-1">
        {/* Dashboard content will go here */}
      </main>
    </div>
  );
}
