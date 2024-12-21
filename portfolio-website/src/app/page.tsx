import Hero from "@/app/components/hero";
import Services from "@/app/components/services";
import Projects from "@/app/components/projects";
import Testimonials from "@/app/components/testimonials";
import Contact from "@/app/components/contact";
// import SmoothScrollExample from "./components/anime";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
      {/* <SmoothScrollExample /> */}
    </main>
  );
}
