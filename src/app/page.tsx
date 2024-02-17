import {KeyDefinition} from '@/stories/KeyDefinition/KeyDefinition';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-12">
      <section className={'header py-8'}>
        App Keys
      </section>
      <section className={'body py-8 grid grid-cols-4 gap-16'}>
        <KeyDefinition keyData={{ keyCodes: ['cmd', 'd'], description: 'Duplicates the current line', label: 'Duplicate Line' }} />
      </section>
    </main>
  );
}
