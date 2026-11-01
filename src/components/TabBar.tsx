
interface TabBarProps {
    setActiveTab: (index: number) => void;
    activeTab: number;
}


const tabs = [
    {
        title: "About me",
        tabIndex: 0
    },
    {
        title: "Career",
        tabIndex: 1,
    }
]

export function TabBar({setActiveTab, activeTab}: TabBarProps){

    return (
       <nav className="flex flex-row gap-5 pl-5 text-lg md:text-2xl mt-5">
            {tabs.map((tab)=> <button key={tab.tabIndex}
            onClick={() => setActiveTab(tab.tabIndex)}
            className={`${tab.tabIndex === activeTab && "border-b-2 font-bold opacity-100" } transition-all duration-100 ease-out opacity-70 cursor-pointer hover:opacity-100`}
            >{tab.title}</button>)}
       </nav>
    )
}