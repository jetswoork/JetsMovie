import { patch } from "../../services/api";
import styles from "./styles.module.css";
import banner from "../../assets/png/bannerDefecto1.JPG";

export const Banner = ({ data }) => {
  return (
    <div className={styles.containerBanner}>
      {data ? (
        <img src={`${patch}${data}`} alt="" />
      ) : (
        <img src={banner} alt="" />
      )}
    </div>
  );
};
