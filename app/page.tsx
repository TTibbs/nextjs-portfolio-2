import { Separator } from "@/components/ui/separator";
import { Header } from "@/components/header";
import { Intro } from "@/components/intro";
import { Projects } from "@/components/projects";
import { AboutMe } from "@/components/about-me";
import { Services } from "@/components/services";
import { Experience } from "@/components/experience";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Reviews } from "@/components/reviews";

export default function Home() {
  return (
    <div className="bg-[#0a0a0a] font-mono text-[#f0f0f0]">
      <Header />

      <main>
        <Intro />

        <Separator className="bg-[#2a2a2a]" />

        <Projects />

        <Separator className="bg-[#2a2a2a]" />

        <AboutMe />

        <Services />

        <Experience />

        <Reviews />

        <Contact />
      </main>

      <Footer />
    </div>
  );
}
