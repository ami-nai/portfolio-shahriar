import SiteHeader from './components/SiteHeader'
import SkillsMarquee from './components/SkillsMarquee'
import ProjectsDeck from './components/ProjectsDeck'
import Experience from './components/Experience'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <SiteHeader />
      <main>
        <SkillsMarquee />
        <ProjectsDeck />
        <Experience />
      </main>
      <Footer />
    </>
  )
}

export default App