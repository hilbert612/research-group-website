import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Research from '@/components/Research'
import Publications from '@/components/Publications'
import Team from '@/components/Team'
import News from '@/components/News'
import Gallery from '@/components/Gallery'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Research />
      <Team />
      <Publications />
      <News />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  )
} 