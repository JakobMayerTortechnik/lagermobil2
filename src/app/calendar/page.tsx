"use client";

import { useState } from 'react';
import { Calendar as CalendarIcon } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import { de } from 'date-fns/locale';

export default function CalendarPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="flex flex-col h-full">
      <header className="bg-background border-b p-4 flex items-center gap-4">
        <CalendarIcon className="size-6 text-primary" />
        <h1 className="text-xl font-semibold font-headline">Kalender</h1>
      </header>
      <main className="flex-1 p-4 md:p-6 flex justify-center">
        <div className="w-full max-w-md">
            <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
                locale={de}
            />
        </div>
      </main>
    </div>
  );
}
