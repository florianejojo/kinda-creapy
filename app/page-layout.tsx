export const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="relative z-10 flex flex-col items-center min-h-0
    justify-between m-5 px-6 md:p-10 tracking-widest sm:max-w-7xl mx-auto "
    >
      {children}
    </div>
  )
}
