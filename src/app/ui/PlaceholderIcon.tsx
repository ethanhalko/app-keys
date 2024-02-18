export default function PlaceholderIcon() {
  return (
    <li className={'flex cursor-pointer hover:shadow-md'} title={'Coming soon'}>
      <div className={'h-20 w-20 mx-auto'}>
        <div className={'flex bg-neutral-300 rounded h-full w-full'}>
          <p className={'text-neutral-500 m-auto text-2xl'}>?</p>
        </div>
      </div>
    </li>
  )
}
