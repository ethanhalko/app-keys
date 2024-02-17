import KeyIcon from './KeyIcon';
import React from 'react';

const iconMap: Record<string, string> = {
  'cmd': 'i-mdi:apple-keyboard-command',
  'opt': 'i-mdi:apple-keyboard-option',
  'ctrl': 'i-mdi:apple-keyboard-control',
  'shift': 'i-mdi:apple-keyboard-shift',
  'fn': 'i-mdi:function'
}
export default function MappedIcon(key: string, last: boolean) {
  const char = iconMap[key] ? <span className={iconMap[key]}/> : key;
  return (
    <React.Fragment key={key}>
      <KeyIcon char={char}/>
      {
        !last && <div className={'text-3xl my-auto px-2'}>+</div>
      }
    </React.Fragment>
  );
}
