import Image from "next/image";
import styles from "./page.module.css";
import classNames from "classnames";
import Nav from "@/components/Nav/Nav";
import StrartPage from "@/components/StartPage/StartPage";
import AboutMe from "@/components/AboutMe/AboutMe";

export default function Home() {
  return (
    <main className="px-4  ">
      <Nav />
      <div style={{ height: "76px" }}></div>
      <StrartPage />
      <AboutMe />
    </main>
  );
}
