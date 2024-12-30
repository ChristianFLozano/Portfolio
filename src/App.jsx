import Header from "./components/Header"
import NavBar from "./components/NavBar"
import AboutMe from "./components/AboutMe"
function App() {
  return (
    < >
      <Header />
      <NavBar />  
      <main className="">
        <section id="about-me" className="w-full h-auto bg-gradient-to-b from-black to-slate-800 p-5">
          <AboutMe/>
        </section>
        
        <div className="h-96" ></div>
      </main>
    </>
  )
}

export default App
