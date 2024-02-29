import Image from "next/image";
import styles from "./Services.module.css";
import classNames from "classnames";

function Services() {
  return (
    <main id="services" className="mt-5 d-flex flex-column align-items-center ">
      <h1 className={classNames("text-center fw-bold  ", styles.textpage)}>
        <span className={classNames("border-bottom border-4  ", styles.bor)}>
          Servi
        </span>
        ces
      </h1>
      <p
        className={classNames(
          "fs-4 my-4 px-0 text-center px-sm-5 opacity-75",
          styles.textpage
        )}
      >
        {" "}
        You can hire me in the following fields.{" "}
      </p>
      <div className="container m-2  text-center">
        <div className="row gap-3 justify-content-center  ">
          <div
            className={classNames(
              "col-12 p-5 col-sm-5 rounded shadow",
              styles["bg-1"]
            )}
          >
            <div
              className={classNames("position-relative mb-1 ", styles.photo)}
            >
              <Image
                src={"/frontendicon.svg"}
                alt={"frontendicon"}
                fill
                className="object-fit-contain"
              />
            </div>
            <p
              className={classNames(
                "fs-3 fw-bold text-start ",
                styles.textpage
              )}
            >
              Frontend
            </p>
            <p
              className={classNames(
                "fs-5 opacity-75 text-start ",
                styles.textpage
              )}
            >
              Programming the website from 0 according to the web design plan.
            </p>
          </div>
          <div
            className={classNames(
              "col-12 col-sm-5 p-5 rounded shadow",
              styles["bg-2"]
            )}
          >
            <div
              className={classNames("position-relative mb-1 ", styles.photo)}
            >
              <Image
                src={"/backendicon.svg"}
                alt={"frontendicon"}
                fill
                className="object-fit-contain"
              />
            </div>
            <p
              className={classNames(
                "fs-3 fw-bold text-start ",
                styles.textpage
              )}
            >
              Backend
            </p>
            <p
              className={classNames(
                "fs-5 opacity-75 text-start ",
                styles.textpage
              )}
            >
              Programming the server and connecting it to the database.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Services;
