export default function Loader({children, loading}: { children: React.ReactNode, loading: boolean }) {
  return (
    loading ? <span className={'i-mdi:loading text-5xl animate-spin m-auto'}/> : <>{children}</>
  )
}
