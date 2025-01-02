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
        <section id="projects" className="w-full h-96 bg-slate-800">
        </section>
      </main>
    </>
  )
}

export default App
