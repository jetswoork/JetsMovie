import logoCurso from "../../../assets/svg/logoCurso.svg";
import styles from "./styles.module.css";
import caratula from "../../../assets/png/caratulaDefecto.JPG";
import { patch } from "../../../services/api";

export const CardCoversBigs = ({ data }) => {
  const { title, poster_path, media_type, backdrop_path } = data;

  return (
    <div className={styles.containerCard} onClick={() => {}}>
      <div className={styles.label}>
        <div className={styles.logoName}>
          <img src={logoCurso} alt="" />
          <h6>{media_type}</h6>
        </div>
        <div className={styles.duration}>
          {/* {duration === 0 ? <h4>1h 32m</h4> : <h4>{duration} m</h4>} */}
        </div>
      </div>
      <div className={styles.containerImg}>
        {poster_path ? (
          <img src={`${patch}${poster_path}`} alt="" />
        ) : (
          <img src={caratula} alt="" />
        )}
      </div>
      <div className={styles.containerTexts}>
        {/* <h6>{title}</h6> */}
        {/* {short_description ? <p>{htmr(short_description)}</p> : <></>} */}
        {/* <p>
          {htmr(author.first_name)} {htmr(author.last_name)}
        </p> */}
      </div>
    </div>
  );
};
