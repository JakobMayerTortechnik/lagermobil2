import { BookUser } from 'lucide-react';

export default function OrdersPage() {
  return (
    <div className="flex flex-col h-full">
       <header className="bg-background border-b p-4 flex items-center gap-4">
        <BookUser className="size-6 text-primary" />
        <h1 className="text-xl font-semibold font-headline">Aufträge</h1>
      </header>
      <main className="flex-1">
        {/* Orders content will go here */}
      </main>
    </div>
  );
}
