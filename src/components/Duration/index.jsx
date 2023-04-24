import styles from "./styles.module.css";
import time from "../../assets/svg/time.svg";

export const Duration = ({ duration }) => {
  return (
    <div className={styles.icons}>
      <div className={styles.time}>
        <img src={time} alt="" /> <p> {duration} minutos</p>
      </div>
    </div>
  );
};
