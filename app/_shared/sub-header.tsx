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
    <div className="w-full flex items-center flex-col justify-center pt-16">
      <h1 className="text-center">{title}</h1>
      <div className={`flex gap-10 my-10 border-b border-border w-full justify-center h-12`}>
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab && setActiveTab(tab)}
            className={`pb-6 text-sm font-light transition

               ${activeTab === tab ? "border-b" : "hover:cursor-pointer"}`}
          >
            {tab}
          </button>
        ))}
      </div>
      <h2 className="text-2xl mb-4">{activeTab}</h2>
      {description && (
        <div className="mb-12 max-w-xl text-center">
          <p className="text-md font-extralight tracking-widest">{description}</p>
        </div>
      )}
    </div>
  )
}
