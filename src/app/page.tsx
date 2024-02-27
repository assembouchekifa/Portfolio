import Image from "next/image";
import styles from "./page.module.css";
import classNames from "classnames";
import Nav from "@/components/Nav/Nav";
import StrartPage from "@/components/StartPage/StartPage";

export default function Home() {
  return (
    <main className="px-4  ">
      <Nav />
      <div style={{ height: "76px" }}></div>
      <StrartPage />
    </main>
  );
}
