import Nav from "@/components/Nav/Nav";
import StrartPage from "@/components/StartPage/StartPage";
import AboutMe from "@/components/AboutMe/AboutMe";
import Services from "@/components/Services/Services";
import Project from "@/components/projects/Project";
import Skells from "@/components/Skells/Skells";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main className="px-4 bg-white ">
      <Nav />
      <div style={{ height: "76px" }}></div>
      <StrartPage />
      <AboutMe />
      <Services />
      <Project />
      <Skells />
      <Footer />
    </main>
  );
}
