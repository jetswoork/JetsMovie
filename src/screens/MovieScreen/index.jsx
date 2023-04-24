import styles from "./styles.module.css";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetMovies } from "../../hooks/useGetMovies";
import { useSelector } from "react-redux";
import { Loader } from "../../components/Loader";
import { Trailer } from "../../components/Trailer";
import { Responsive } from "../../components/Responsive";
import { Banner } from "../../components/Banner";
import { SliderContent } from "../../components/SliderContent";
import { Duration } from "../../components/Duration";
import { Buttons } from "../../components/Buttons";

export const MovieScreen = () => {
  const { id } = useParams();

  const { getMovie, getVideo, getSimilar } = useGetMovies();
  const { movie, video, similar } = useSelector((state) => state.movies);
  const { overview, title, runtime, backdrop_path, poster_path } = movie;

  useEffect(() => {
    getMovie(id);
    getVideo(id);
    getSimilar(id);
  }, [id]);

  return (
    <div className={styles.containerPromo}>
      {(title, video, similar === undefined) ? (
        <Loader />
      ) : (
        <>
          {!video ? (
            <Banner data={backdrop_path} />
          ) : (
            <Trailer data={video.key} />
          )}
          <Responsive>
            <div className={styles.containerCurso}>
              <div className={styles.containerInfo}>
                <h2>{title}</h2>
                <Buttons />
              </div>
              <Duration duration={runtime} />
              <div className={styles.texts}>
                <p>{overview}</p>
                {similar.length === 0 ? null : <h5>Recomendadas para ti</h5>}
              </div>
              {similar.length === 0 ? null : (
                <div>
                  <SliderContent data={similar} />
                </div>
              )}
            </div>
          </Responsive>
        </>
      )}
    </div>
  );
};
