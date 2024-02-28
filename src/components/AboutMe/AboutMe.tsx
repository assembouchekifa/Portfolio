import styles from "./AboutMe.module.css";
import classNames from "classnames";

function AboutMe() {
  return (
    <main id="aboutMe" className="mt-5">
      <h1 className={classNames("text-center fw-bold  ", styles.textpage)}>
        <span className={classNames("border-bottom border-4  ", styles.bor)}>
          About
        </span>{" "}
        Me
      </h1>
      <p className="fs-4 my-4 px-0 text-center px-sm-5 opacity-75">
        Hi Everyone, I am Assem Abdeljalil Bouchekifa from Algeria.
        <br />
        I have two years of experience in the field of programming.
        <br /> You can hire me in Frontend and backend.
      </p>
      <p className="fs-4 px-5 my-4 py-3 text-center opacity-75">
        I love programming and video games, and in my free time I sometimes play
        sports.
      </p>
      <div className="d-flex justify-content-center align-items-center flex-wrap ">
        <a className={styles.textpage} href="#projects">
          <button
            className={classNames(
              "btn px-5 mt-2 mb-5 py-2 fw-bold mx-3 ",
              styles.but
            )}
          >
            VIEW WORKS
          </button>
        </a>
        <a className={styles.textpage} href="#">
          <button
            className={classNames(
              "btn px-5 mt-2 mb-5 py-2 fw-bold mx-3 ",
              styles["but-2"]
            )}
          >
            DOWNLOAD CV
          </button>
        </a>
      </div>
    </main>
  );
}

export default AboutMe;
