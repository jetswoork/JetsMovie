import styles from "./styles.module.css";
import YouTube from "react-youtube";

export const Trailer = ({ data }) => {
  const opts = {
    height: "600",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className={styles.containerTrailer}>
      <div className={styles.containerImg}>
        <YouTube videoId={data} opts={opts} />
      </div>
    </div>
  );
};
