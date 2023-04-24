import styles from "./styles.module.css";
import back from "../../assets/svg/back.svg";
import { useSelector } from "react-redux";
import { Fragment } from "react";
import { Loader } from "../../components/Loader";
import { useNavigate } from "react-router-dom";
import { Responsive } from "../../components/Responsive";
import { SearchResults } from "../../components/Search";

export const More = () => {
  const navigate = useNavigate();
  const { more } = useSelector((state) => state.movies);

  return (
    <Fragment>
      {more === undefined ? (
        <Loader />
      ) : (
        <Responsive>
          <div className={styles.save}>
            <div className={styles.back}>
              <img src={back} alt="" onClick={() => navigate("/")} />
              <p className={styles.link} onClick={() => navigate("/")}>
                volver
              </p>
            </div>

            <div className={styles.containerFound}>
              {more.length > 0
                ? more.map((mor, key) => (
                    <div
                      key={key}
                      className={`${styles.relative} animate__animated animate__fadeIn`}
                    >
                      <SearchResults data={mor} />
                    </div>
                  ))
                : null}
            </div>
          </div>
        </Responsive>
      )}
    </Fragment>
  );
};
