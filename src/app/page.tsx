import {KeyDefinition} from '@/app/ui/KeyDefinition';

export default function Home() {
  return (
    <>
      <section className={'header py-8'}>
        App Keys
      </section>
      <section className={'body py-8 grid grid-cols-4 gap-16'}>
        <KeyDefinition keyData={{ keyCodes: ['cmd', 'd'], description: 'Duplicates the current line' }} />
      </section>
    </>
  );
}
