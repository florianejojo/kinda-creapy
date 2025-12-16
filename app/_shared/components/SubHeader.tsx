import { Tab } from "@/app/_shared/shared.types"

type SubHeaderProps = {
  title: string
  description?: string
  tabs?: Tab[]
  activeTab?: Tab
  setActiveTab?: (tab: Tab) => void
}

export const SubHeader = ({
  title,
  tabs = [],
  description,
  activeTab,
  setActiveTab,
}: SubHeaderProps) => {
  return (
    <div className="pt-8 w-full flex items-center flex-col justify-center sm:pt-16">
      <h1 className="text-xl sm:text-4xl text-center">{title}</h1>
      <div
<<<<<<< HEAD
        className={`flex my-4 gap-6 sm:gap-10 sm:my-10 border-b border-border w-full justify-center h-12`}
=======
        className={`flex  my-4 sm:gap-10 sm:my-10 border-b border-border w-full justify-center h-12`}
>>>>>>> b6358c0 (feat(Admin): Add new fields to products)
      >
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab && setActiveTab(tab)}
            className={`sm:pb-6 text-sm sm:text-lg font-light transition

               ${activeTab === tab ? "border-b" : "hover:cursor-pointer"}`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div></div>
      {description && (
        <div className="max-w-xl text-center h-14 px-4">
          <p className="text-sm font-extralight sm:tracking-widest">{description}</p>
        </div>
      )}
    </div>
  )
}
