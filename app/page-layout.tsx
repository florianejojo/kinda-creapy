export const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative z-10 flex min-h-screen flex-col items-center justify-between m-5 md:p-10 tracking-widest sm:max-w-7xl mx-auto">
      {children}
    </div>
  )
}
