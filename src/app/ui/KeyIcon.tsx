import {ReactNode} from 'react';

export default function KeyIcon({char}: { char: ReactNode }) {
  return (
    <div className={'text-xl md:text-2xl 2xl:text-3xl text-neutral-500 rounded-xl border-2 border-neutral-400 w-12 h-12 lg:w-16 lg:h-16 flex'}>
      <div className={'m-auto flex'}> {char} </div>
    </div>
  )
}
