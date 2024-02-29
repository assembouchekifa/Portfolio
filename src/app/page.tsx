import Image from "next/image";
import styles from "./page.module.css";
import classNames from "classnames";
import Nav from "@/components/Nav/Nav";
import StrartPage from "@/components/StartPage/StartPage";
import AboutMe from "@/components/AboutMe/AboutMe";
import Services from "@/components/Services/Services";
import Project from "@/components/projects/Project";
import Skells from "@/components/Skells/Skells";

export default function Home() {
  return (
    <main className="px-4  ">
      <Nav />
      <div style={{ height: "76px" }}></div>
      <StrartPage />
      <AboutMe />
      <Services />
      <Project />
      <Skells />
    </main>
  );
}
