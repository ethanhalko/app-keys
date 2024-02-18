import Image from 'next/image'
import {find} from '@/api/keys';
import {App} from '@/types/AppKeys';
import Section from '@/app/ui/Section';

export default function Page({params}: { params: { app: number } }) {
  const data = find(1) || {} as App;

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
        <span className={'i-mdi:apple-finder'}></span>
        <span className={'i-mdi:microsoft-windows-classic'}></span>
      </div>
      {
        data.sections.map(section => <Section key={section.name} sectionData={section}/>)
      }
    </>
  )
}
