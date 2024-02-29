import styles from "./Skells.module.css";
import classNames from "classnames";

function Icon({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={classNames(
        "col rounded border p-3 shadow m-4 ",
        styles.bor,
        styles.wfit
      )}
    >
      {children}
      {/* <FaNode size={"100px"} className={styles.textpage} /> */}
    </div>
  );
}

export default Icon;
