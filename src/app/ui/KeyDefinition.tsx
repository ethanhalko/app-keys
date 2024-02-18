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
    <div className={'flex flex-col'}>
      <div className={'text-base m-auto text-neutral-600 py-8 text-center'}>{keyData.description}</div>
      <div className={'flex mx-auto'}>
        {
          keyMap.map((k, i) => <MappedIcon key={k} keyChar={k} last={i + 1 === keyMap.length}/>)
        }
      </div>
    </div>
  );
};
