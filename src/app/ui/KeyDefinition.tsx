import React from 'react';
import {AppKey} from '@/types/AppKeys';
import MappedIcon from './MappedIcon';
import {useSearchParams} from 'next/navigation';

interface KeyDefinitionProps {
  keyData: AppKey;
  onClick?: () => void;
}

export const KeyDefinition = ({keyData}: KeyDefinitionProps) => {
  const searchParams = useSearchParams();
  const keyMap = Array.isArray(keyData.keyCodes) ? keyData.keyCodes : keyData.keyCodes[searchParams.get('os') || 'mac'];

  return (
    <div className={'flex justify-between border-b-2 px-2'}>
      <div className={'text-sm my-auto text-neutral-600 py-8 px-2'}>{keyData.description}</div>
      <div className={'flex my-auto'}>
        {
          keyMap.map((k, i) => <MappedIcon key={`${k}-${i}`} keyChar={k} last={i + 1 === keyMap.length}/>)
        }
      </div>
    </div>
  );
};
