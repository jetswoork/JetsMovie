import logoCurso from "../../../assets/svg/logoCurso.svg";
import styles from "./styles.module.css";
import caratula from "../../../assets/png/caratulaDefecto.JPG";
import { patch } from "../../../services/api";

export const CardCovers = ({ data }) => {
  const { title, media_type, backdrop_path } = data;

  return (
    <div className={styles.containerCard} onClick={() => {}}>
      <div className={styles.label}>
        <div className={styles.logoName}>
          <img src={logoCurso} alt="" />
          <h6>{media_type}</h6>
        </div>
        <div className={styles.duration}></div>
      </div>
      <div className={styles.containerImg}>
        {backdrop_path ? (
          <img src={`${patch}${backdrop_path}`} alt="" />
        ) : (
          <img src={caratula} alt="" />
        )}
        {/* <img src={`${patch}${backdrop_path}`} alt="" /> */}
      </div>
      <div className={styles.containerTexts}>
        <h6>{title}</h6>
      </div>
    </div>
  );
};
