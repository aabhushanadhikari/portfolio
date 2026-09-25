import { About } from './components/About'
import { Blogs } from './components/Blogs'
import { Contact } from './components/Contact'
import { Education } from './components/Education'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { Projects } from './components/Projects'
import { ScrollProgress } from './components/ScrollProgress'
import { Skills } from './components/Skills'
import { TechMarquee } from './components/TechMarquee'
import { useScrollProgress } from './hooks/useScrollProgress'

function App() {
  const progress = useScrollProgress()

  return (
    <>
      <ScrollProgress progress={progress} />
      <Nav />
      <main>
        <Hero />
        <TechMarquee />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Blogs />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
