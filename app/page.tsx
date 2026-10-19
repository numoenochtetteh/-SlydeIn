import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ExperienceFeature } from "@/components/experience-feature"
import { Projects } from "@/components/projects"
import { ComingUpNext } from "@/components/coming-up-next"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ExperienceFeature />
      <ComingUpNext />
      <Projects />
      <FAQ />
      <Footer />
    </main>
  )
}
