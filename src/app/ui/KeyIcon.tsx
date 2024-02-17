import {ReactNode} from 'react';

export default function KeyIcon({char}: { char: ReactNode }) {
  return (
    <div className={'text-3xl text-neutral-500 rounded-xl border-2 border-sky-900 w-16 h-16 flex'}>
      <div className={'m-auto flex'}> {char} </div>
    </div>
  )
}
