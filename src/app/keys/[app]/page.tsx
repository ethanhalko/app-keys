'use client'
import {find} from '@/api/keys';
import Image from 'next/image'
import Section from '@/app/ui/Section';
import {usePathname, useSearchParams, useRouter} from 'next/navigation';
import SystemSwitch from '@/app/ui/SystemSwitch/SystemSwitch';
import React, {useEffect, useState} from 'react';
import Loader from '@/app/ui/Loader';
import {App} from '@/types/AppKeys';

export default function Page({params}: { params: { app: string } }) {
  const [os, setOs] = useState<string | undefined>();
  const [filter, setFilter] = useState<string | undefined>('');
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const data = find(params.app) || {} as App;

  useEffect(() => {
    const query = searchParams.get('os');
    setOs(query || (/(Mac|iPhone|iPod|iPad)/i.test(navigator.userAgent) ? 'mac' : 'windows'));
  }, [setOs, searchParams]);

  function setOsQuery(isWindows: boolean) {
    setOs(isWindows ? 'windows' : 'mac');

    router.replace(pathname + `?os=${os === 'mac' ? 'windows' : 'mac'}`, {scroll: false});
  }

  return (
    <Loader loading={!os || !data}>
      <>
        <div className={'relative block h-12 w-12'}>
          {
            data.logo &&
            <Image src={`/images/${data.logo}`} alt={`${data.name} Logo`} fill></Image>
          }
        </div>
        <h1 className={'font-light text-neutral-500 my-8 text-4xl'}>{data.name}</h1>
        <div className={'flex mb-8 gap-4'}>
          <SystemSwitch system={os!} onChange={setOsQuery}/>
        </div>
        <div className={'relative w-full px-2 sm:w-2/3 flex my-4'}>
          <input type={'test'}
                 className={'p-2 mx-auto text-md rounded-md w-full relative bg-transparent outline-none border-b'}
                 placeholder={'Filter Shortcuts'}
                 value={filter}
                 onInput={(e: React.ChangeEvent<HTMLInputElement>) => setFilter(e.target.value)}
          />
          <span className={'i-mdi:close absolute right-4 top-1/2 bottom-1/2 -translate-y-1/2 cursor-pointer'} onClick={() => setFilter('')}/>
        </div>
        {
          data.sections?.map(section => <Section key={section.name} sectionData={section} filter={filter}/>)
        }
      </>
    </Loader>
  )
}
