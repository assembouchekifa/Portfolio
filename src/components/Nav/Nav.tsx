import Image from "next/image";
import styles from "./Nav.module.css";
import classNames from "classnames";

function Nav() {
  return (
    <nav
      className={classNames(
        "navbar px-md-5 px-1 fixed-top min-vw-100 top navbar-expand-lg ",
        styles.nav
      )}
    >
      <div className="container-fluid  ">
        <a className="navbar-brand   " href="#">
          <Image
            width={100}
            height={50}
            src={"/logo.svg"}
            alt={"logo"}
            className="text-danger"
          />
        </a>
        <button
          className="navbar-toggler shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse flex-grow-0 navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className={classNames("nav-link  px-3 ", styles.textpage)}
                aria-current="page"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="nav-item  ">
              <a
                className={classNames("nav-link  px-3 ", styles.textpage)}
                href="#aboutMe"
              >
                About Me
              </a>
            </li>
            <li className="nav-item  ">
              <a
                className={classNames("nav-link  px-3 ", styles.textpage)}
                href="#services"
              >
                Services
              </a>
            </li>
            <li className="nav-item  ">
              <a
                className={classNames("nav-link  px-3 ", styles.textpage)}
                href="#projects"
              >
                Projects
              </a>
            </li>
            <li className="nav-item  ">
              <a
                className={classNames("nav-link  px-3 ", styles.textpage)}
                href="#skillset"
              >
                Skillset
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
