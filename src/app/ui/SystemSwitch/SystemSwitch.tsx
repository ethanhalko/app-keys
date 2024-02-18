import {Switch} from '@headlessui/react';
import styles from './SystemSwitch.module.css';

export default function SystemSwitch({system, onChange}: { system: 'mac' | 'windows' | string, onChange: () => void }) {
  return (
    <div className={'flex'}>
      <span className={'i-mdi:apple-finder text-2xl my-auto'} title={'MacOS'} aria-label={'MacOS'}/>
      <Switch checked={system === 'windows'} onChange={onChange} className={styles.outer}>
        <span className="sr-only">Switch between Mac and Windows Hotkeys</span>
        <span aria-hidden="true" className={`${system === 'windows' ? 'translate-x-[25px]' : 'translate-x-0'} ${styles.dot}`}/>
      </Switch>
      <span className={'i-mdi:microsoft-windows-classic text-2xl my-auto'} title={'Windows'} aria-label={'Windows'}/>
    </div>
  )
}
