import React from 'react';
import {AppKey} from '@/types/AppKeys';
import getMappedIcon from '../../app/ui/MappedIcon';

interface KeyDefinitionProps {
  keyData: AppKey;
  onClick?: () => void;
}

export const KeyDefinition = ({keyData}: KeyDefinitionProps) => {
  return (
    <div className={'flex flex-col gap-3'}>
      <div className={'text-xl m-auto underline underline-offset-8 decoration-1 text-neutral-600'}>{keyData.description}</div>
      <div className={'flex mx-auto'}>
        {keyData.keyCodes.map((k, i) => getMappedIcon(k, i + 1 === keyData.keyCodes.length))}
      </div>
    </div>
  );
};
