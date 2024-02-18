import Link from 'next/link';
import {index} from '@/api/keys';
import {App} from '@/types/AppKeys';
import KeyIcon from '@/app/ui/KeyIcon';
import MappedIcon from '@/app/ui/MappedIcon';
import Image from 'next/image';
import PlaceholderIcon from '@/app/ui/PlaceholderIcon';
import AppIcon from '@/app/ui/AppIcon';

export default function Home() {
  const data = index() || {} as App;

  return (
    <>
      <section className={'header flex w-full border-b border-neutral-400 h-36'}>
        <div className={'flex m-auto'}>
          <div className={'text-5xl my-auto mx-1'}>H</div>
          <MappedIcon keyChar={'cmd'}/>
          <div className={'text-5xl my-auto ml-1 mr-8'}>t</div>
          <KeyIcon char={'K'}/>
          <div className={'text-5xl my-auto ml-1'}>eys</div>
        </div>
      </section>
      <section className={'my-12'}>
        <p className={'text-xl font-light text-neutral-700 border border-neutral-400 rounded-sm p-6 bg-slate-100'}>
          Under development! Come back later or check out the <Link className={'underline underline-offset-2 hover:underline-offset-4 transition-all decoration-1 text-slate-700'} href={'https://github.com/ethanhalko/app-keys'}>codebase!</Link>
        </p>
      </section>
      <section className={'body w-full flex my-12'}>
        <ul className={'mx-auto grid grid-cols-4 gap-16'}>
          {
            data.map((app) => <AppIcon key={app.id} app={app}/>)
          }
          <PlaceholderIcon/>
          <PlaceholderIcon/>
          <PlaceholderIcon/>
          <PlaceholderIcon/>
          <PlaceholderIcon/>
          <PlaceholderIcon/>
          <PlaceholderIcon/>
        </ul>
      </section>
    </>
  );
}
