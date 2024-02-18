'use client'
import {find} from '@/api/keys';
import {App} from '@/types/AppKeys';
import Image from 'next/image'
import Section from '@/app/ui/Section';
import {usePathname, useSearchParams, useRouter} from 'next/navigation';
import SystemSwitch from '@/app/ui/SystemSwitch/SystemSwitch';

export default function Page({params}: { params: { app: number } }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const data = find(1) || {} as App;
  const os = searchParams.get('os') || 'mac';

  function setOs() {
    router.push(pathname + `?os=${os === 'mac' ? 'windows' : 'mac'}`, {scroll: false});
  }

  return (
    <>
      <div className={'relative block h-12 w-12'}>
        {
          data.logo &&
          <Image src={`/images/${data.logo}`} alt={`${data.name} Logo`} fill></Image>
        }
      </div>
      <h1 className={'font-light text-neutral-500 my-8 text-4xl'}>{data.name}</h1>
      <div className={'flex mb-8 gap-4'}>
        <SystemSwitch system={os} onChange={setOs}/>
      </div>
      {
        data.sections.map(section => <Section key={section.name} sectionData={section}/>)
      }
    </>
  )
}
