import type { Metadata } from 'next';
import { LabSection } from '@/components/Lab/LabSection';
import { labItems } from '@/data/lab';

export const metadata: Metadata = {
  title: 'Lab — Tushar Nailwal',
  description: 'Experimental projects, prototypes, and technical explorations by Tushar Nailwal.',
};

export default function LabPage() {
  return (
    <main className="pt-16 min-h-screen">
      <LabSection items={labItems} />
    </main>
  );
}
