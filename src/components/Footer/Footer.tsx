import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import styles from "./Footer.module.css";
import classNames from "classnames";
import { FaSquareGithub } from "react-icons/fa6";
import Inputmessage from "../Inputmessage/Inputmessage";

function Footer() {
  return (
    <main className="my-4" id="hire">
      <div
        className={classNames("fs-3 my-4 px-0 text-center px-sm-5", styles.bg)}
      >
        <p
          className={classNames(
            "fs-2 fw-bolder py-4 px-0 text-center px-sm-5 ",
            styles.textpage
          )}
        >
          Have any projects in mind ?
        </p>
        <Inputmessage />
      </div>
      <ul
        className="d-flex justify-content-center pt-3 ps-0 "
        style={{ listStyle: "none" }}
      >
        <li className="mx-3">
          <a
            href="https://www.instagram.com/bouchekifaassem"
            target="_blank"
            className={styles.textpage}
          >
            <FaInstagramSquare size={"40px"} />
          </a>
        </li>
        <li className="mx-3">
          <a
            href="https://www.facebook.com/assem.yagami"
            target="_blank"
            className={styles.textpage}
          >
            <FaFacebookSquare size={"40px"} />
          </a>
        </li>
        <li className="mx-3">
          <a
            href="https://github.com/assembouchekifa"
            target="_blank"
            className={styles.textpage}
          >
            <FaSquareGithub size={"40px"} />
          </a>
        </li>
      </ul>
    </main>
  );
}

export default Footer;
