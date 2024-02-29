import Image from "next/image";
import styles from "./Project.module.css";
import classNames from "classnames";

function Project() {
  return (
    <main className="mt-5" id="projects">
      <h1 className={classNames("text-center fw-bold  ", styles.textpage)}>
        <span className={classNames("border-bottom border-4  ", styles.bor)}>
          Lates
        </span>
        t Works
      </h1>
      <p
        className={classNames(
          "fs-4 my-4 px-0 text-center px-sm-5 opacity-75",
          styles.textpage
        )}
      >
        {" "}
        These are some of my projects.{" "}
      </p>
      <div className="container text-center">
        <div className="row">
          <div className="col-12 col-md-4  ">
            <a
              target="_blank"
              href="https://assembouchekifa.github.io/Remove-Background-Web"
              className="position-relative d-flex w-100 mx-2 my-4 shadow"
            >
              <Image
                src={"/rmbg.png"}
                alt={""}
                className="h-auto object-fit-cover rounded position-static "
                fill
                sizes="(min-width: 808px) 50vw, 100vw"
              />
            </a>
            <a
              target="_blank"
              href="https://assembouchekifa.github.io/Guess-The-Word"
              className="position-relative d-flex w-100 mx-2 my-4 shadow"
            >
              <Image
                src={"/gussthword.png"}
                alt={""}
                className="h-auto object-fit-cover rounded position-static "
                fill
                sizes="(min-width: 808px) 50vw, 100vw"
              />
            </a>
          </div>
          <div className="col-12 col-md-4">
            <a
              target="_blank"
              href="https://to-do-list-next-js-sandy.vercel.app"
              className="position-relative d-flex w-100 mx-2 my-4 shadow"
            >
              <Image
                src={"/todolist.png"}
                alt={""}
                className="h-auto object-fit-cover rounded position-static "
                fill
                sizes="(min-width: 808px) 50vw, 100vw"
              />
            </a>
            <a
              target="_blank"
              href="https://assembouchekifa.github.io/Memory-Game-Web"
              className="position-relative d-flex w-100 mx-2 my-4 shadow"
            >
              <Image
                src={"/memorygame.png"}
                alt={""}
                className="h-auto object-fit-cover rounded position-static "
                fill
                sizes="(min-width: 808px) 50vw, 100vw"
              />
            </a>
          </div>
          <div className="col-12 col-md-4">
            <a
              target="_blank"
              href="https://general-messages.vercel.app"
              className="position-relative d-flex w-100 mx-2 my-4 shadow"
            >
              <Image
                src={"/chat.png"}
                alt={""}
                className="h-auto object-fit-cover rounded position-static "
                fill
                sizes="(min-width: 808px) 50vw, 100vw"
              />
            </a>
            <a
              target="_blank"
              href="https://assembouchekifa.github.io/Rock-Paper-Scissors-Web"
              className="position-relative d-flex w-100 mx-2 my-4 shadow"
            >
              <Image
                src={"/roke.png"}
                alt={""}
                className="h-auto object-fit-cover rounded position-static "
                fill
                sizes="(min-width: 808px) 50vw, 100vw"
              />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Project;
