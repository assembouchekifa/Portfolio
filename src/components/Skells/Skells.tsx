import styles from "./Skells.module.css";
import classNames from "classnames";
import { FaBootstrap, FaGitAlt, FaNode, FaReact } from "react-icons/fa";
import {
  SiNextdotjs,
  SiExpress,
  SiTypescript,
  SiTailwindcss,
  SiRedux,
} from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io";
import Icon from "./Icon";
import { TbBrandCpp } from "react-icons/tb";

function Skells() {
  return (
    <main className="mt-5" id="skillset">
      <h1 className={classNames("text-center fw-bold  ", styles.textpage)}>
        <span className={classNames("border-bottom border-4  ", styles.bor)}>
          Profe
        </span>
        ssional Skillset
      </h1>
      <div className="container text-center">
        <div className="row row-cols-2 row-cols-md-4 justify-content-center ">
          <Icon>
            <FaNode size={"80px"} className={styles.textpage} />
          </Icon>
          <Icon>
            <FaGitAlt size={"80px"} className={styles.textpage} />
          </Icon>{" "}
          <Icon>
            <FaReact size={"80px"} className={styles.textpage} />
          </Icon>{" "}
          <Icon>
            <SiNextdotjs size={"80px"} className={styles.textpage} />
          </Icon>{" "}
          <Icon>
            <SiExpress size={"80px"} className={styles.textpage} />
          </Icon>{" "}
          <Icon>
            <SiTypescript size={"80px"} className={styles.textpage} />
          </Icon>{" "}
          <Icon>
            <BiLogoMongodb size={"80px"} className={styles.textpage} />
          </Icon>{" "}
          <Icon>
            <IoLogoJavascript size={"80px"} className={styles.textpage} />
          </Icon>
          <Icon>
            <FaBootstrap size={"80px"} className={styles.textpage} />
          </Icon>
          <Icon>
            <SiTailwindcss size={"80px"} className={styles.textpage} />
          </Icon>
          <Icon>
            <SiRedux size={"80px"} className={styles.textpage} />
          </Icon>
          <Icon>
            <TbBrandCpp size={"80px"} className={styles.textpage} />
          </Icon>
        </div>
      </div>
    </main>
  );
}

export default Skells;
