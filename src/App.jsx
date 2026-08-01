import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Areas from './components/Areas'
import HowIWork from './components/HowIWork'
import FirstSession from './components/FirstSession'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div id="top" className="min-h-screen bg-background font-body text-ink">
      <Nav />
      <main>
        <Hero />
        <About />
        <Areas />
        <HowIWork />
        <FirstSession />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
