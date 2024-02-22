'use client';

import type {Section} from '@/types/AppKeys';
import {KeyDefinition} from '@/app/ui/KeyDefinition';
import {useState} from 'react';
import {Transition} from '@headlessui/react';
import Fuse from 'fuse.js';
export default function Section({sectionData, filter = ''}: { sectionData: Section, filter: string | undefined }) {
  const [showSection, setShowSection] = useState(true);
  const fuse = new Fuse(sectionData.keys || [], {keys: ['description'], threshold: 0.35});
  const keys = filter ? fuse.search(filter) : sectionData.keys?.map((k) => ({item: k}));

  return (
    <div className={'w-full sm:w-5/6 max-w-7xl'}>
      <h2 className={'bg-neutral-100 text-center sm:text-left text-3xl text-neutral-700 mx-auto bg-inherit cursor-pointer'} onClick={() => setShowSection(!showSection)}>
        <div className={'mx-auto border-b-2 my-2'}>
          {sectionData.name}
          <span className={`${showSection ? 'i-mdi:chevron-down' : 'i-mdi:chevron-right'} align-middle`}/>
        </div>
      </h2>
      <div className={'w-full overflow-hidden'}>
        <Transition
          show={showSection}
          enter="transition-transform duration-200"
          enterFrom="-translate-y-full"
          enterTo=""
          leave="transition-transform duration-300"
          leaveFrom="relative"
          leaveTo="-translate-y-full"
        >
          <div className={`grid grid-cols-1 xl:grid-cols-2 py-8`}>
            {
              keys?.map((key) => <KeyDefinition key={JSON.stringify(key.item.keyCodes)} keyData={key.item}/>)
            }
          </div>
        </Transition>
      </div>
    </div>
  )
}
