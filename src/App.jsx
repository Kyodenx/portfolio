import Certificados from "./assets/components/Certificados"
import Hero from "./assets/components/Hero"
import NavBar from "./assets/components/NavBar"
import Footer from "./assets/components/Footer"
function App() {


  return (
    <>
      <div>
        <header>
          <NavBar />
          <Hero />
        </header>
        <main>
          <Certificados />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  )
}

export default App
