import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { ExperienceFeature } from "@/components/experience-feature";
import { Projects } from "@/components/projects";
import { ComingUpNext } from "@/components/coming-up-next";
import { FeaturedExperiencesStrip } from "@/components/featured-experiences-strip";
import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      {/* <ExperienceFeature /> */}

      <ComingUpNext />
      <FeaturedExperiencesStrip />
      <Projects />
      <FAQ />
      <Footer />
    </main>
  );
}
