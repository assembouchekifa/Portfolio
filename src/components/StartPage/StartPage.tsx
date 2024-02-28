import Image from "next/image";
import styles from "./StartPage.module.css";
import classNames from "classnames";

function StartPage() {
  return (
    <main className=" mt-5 ">
      <div className="container text-center">
        <div className="row">
          <div
            className={classNames(
              "col-12 col-lg-6 d-flex flex-column align-items-center my-5 "
            )}
          >
            {" "}
            <div className="d-flex flex-column align-items-start">
              <p className={classNames("mb-0", styles.textpage)}>Hello</p>
              <p className={classNames("fs-1 fw-bold", styles.textpage)}>
                I&apos;m Assem
              </p>
              <p
                className={classNames(
                  "text-start fs-4 fw-bold opacity-75 ",
                  styles.textpage
                )}
              >
                Web Developer <br /> frontend & backend
              </p>{" "}
              <button
                className={classNames(
                  "btn px-5 mt-2 mb-5 py-2 fw-bold ",
                  styles.but
                )}
              >
                HIRE ME
              </button>
            </div>{" "}
          </div>
          <div
            className={classNames(
              "col-12 col-lg-6  position-relative ",
              styles.photo
            )}
          >
            <Image
              src={"/bgphoto.svg"}
              className="object-fit-contain"
              alt={"photobg"}
              fill
            />
            <Image
              src={"/mypoto.png"}
              className="object-fit-contain"
              alt={"May photo"}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default StartPage;
