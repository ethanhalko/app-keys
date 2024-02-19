import Link from 'next/link';

export default function Layout({children}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Link href={'/'} title={'Go back'}>
        <span className={'i-mdi:keyboard-backspace text-4xl absolute left-8 top-8 hover:scale-105 transition-transform'}/>
      </Link>
      {children}
    </>
  )
}
