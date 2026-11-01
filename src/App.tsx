import { useState } from "react"
import {Header, TabBar, AboutMe, Career} from "./components/"

function App() {

  const [selectedTab, setSelectedTab] = useState(0)

  return (
    <main className="bg-linear-to-b from-black from-40% to-gray-950 flex flex-col w-full h-dvh text-white p-3">
      <Header />
      <TabBar setActiveTab={setSelectedTab} activeTab={selectedTab}/>

      {
        selectedTab === 0 && <AboutMe/>
      }

      {
        selectedTab === 1 && <Career/>
      }
    </main>
  )
}

export default App
