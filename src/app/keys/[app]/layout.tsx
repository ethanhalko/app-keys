export default function Layout({children}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={'bg-neutral-100 mx-auto shadow-lg w-2/3 flex flex-col items-center p-8'}>
      {children}
    </div>
  )
}
