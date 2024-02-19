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
      <section className={'header flex flex-col w-full border-b border-neutral-400 h-36'}>
        <div className={'flex m-auto'}>
          <MappedIcon keyChar={'cmd'}/>
          <div className={'text-4xl my-auto mx-1'}>+</div>
          <KeyIcon char={'K'}/>
        </div>
        <h1 className={'m-auto text-sm tracking-widest italic text-light'}>hotkeys.lol</h1>
      </section>
      <section className={'my-12 flex items-center'}>
        <p className={'text-9xl my-auto'}>(</p>
        <div>
          <p className={'my-auto tracking-widest text-sm font-light text-neutral-700 text-center leading-7 mt-2 mx-3'}>
            This is a placeholder landing page.
            <br/>This site is extremely under development.
            <br/>Come back later if you want.
          </p>
          <p className={'my-auto text-neutral-500 font-light italic text-xs text-center'}>...no worries if not.</p>
        </div>
        <p className={'text-9xl my-auto'}>)</p>
      </section>
      <section className={'body w-full flex my-12'}>
        <ul className={'mx-auto grid grid-cols-4 gap-8 sm:gap-16'}>
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
