'use client'
import {find} from '@/api/keys';
import Image from 'next/image'
import Section from '@/app/ui/Section';
import {usePathname, useSearchParams, useRouter} from 'next/navigation';
import SystemSwitch from '@/app/ui/SystemSwitch/SystemSwitch';
import {useEffect, useState} from 'react';
import Loader from '@/app/ui/Loader';

export default function Page({params}: { params: { app: string } }) {
  const [os, setOs] = useState<string | undefined>();
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const data = find(params.app);

  useEffect(() => {
    const query = searchParams.get('os');
    setOs(query || (/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform) ? 'mac' : 'windows'));
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
            // @todo Find a solution for this
            data!.logo &&
            <Image src={`/images/${data!.logo}`} alt={`${data!.name} Logo`} fill></Image>
          }
        </div>
        <h1 className={'font-light text-neutral-500 my-8 text-4xl'}>{data!.name}</h1>
        <div className={'flex mb-8 gap-4'}>
          <SystemSwitch system={os!} onChange={setOsQuery}/>
        </div>
        {
          data!.sections.map(section => <Section key={section.name} sectionData={section}/>)
        }
      </>
    </Loader>
  )
}
