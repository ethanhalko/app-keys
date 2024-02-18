import Link from 'next/link';
import Image from 'next/image';
import {App} from '@/types/AppKeys';

export default function AppIcon({app}: { app: App }) {
  return (
    <li key={app.id} className={'flex hover:drop-shadow-md'}>
      <Link href={'/keys/1'} className={'text-center'}>
        <div className={'relative block h-20 w-20 mx-auto'}>
          <Image src={`/images/${app.logo}`} alt={`${app.name} Logo`} fill></Image>
        </div>
      </Link>
    </li>
  )
}
