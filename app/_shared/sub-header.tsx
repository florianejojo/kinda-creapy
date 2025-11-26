import { Tab } from "@/app/_shared/shared.types"

export const SubHeader = ({
  title,
  tabs,
  description,
  activeTab,
  setActiveTab,
}: {
  title: string
  description: string
  tabs: Tab[]
  activeTab: Tab
  setActiveTab: (tab: Tab) => void
}) => {
  return (
    <div className="w-full flex items-center flex-col justify-center font-serif">
      <h1 className="text-4xl font-serif text-center">{title}</h1>
      <div className={`flex gap-6 my-10 border-b border-b-gray-500 w-full justify-center`}>
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-6 text-sm font-light transition

               ${activeTab === tab ? "border-b" : "hover:cursor-pointer"}`}
          >
            {tab}
          </button>
        ))}
      </div>
      <h2 className="text-2xl mb-4">{activeTab}</h2>
      {description && (
        <div className="mb-12 max-w-2xl text-center">
          <p className="text-sm font-ex ">{description}</p>
        </div>
      )}
    </div>
  )
}
