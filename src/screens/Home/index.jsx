import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SliderReleases } from "../../components/Home/SliderReleases";
import { Promotion } from "../../components/Promotion";
import { Navigate } from "../../components/Navigate";
import { SliderCovers } from "../../components/SliderCovers";
import { listMore } from "../../redux/slices/movies/moviesSlice";

export const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { trends, mostValued, upcoming, popularMovies, popularTv } =
    useSelector((state) => state.movies);

  return (
    <div
      className={`${styles.containerHome} animate__animated animate__fadeIn`}
    >
      <div className={styles.containerPro}>
        <Promotion />
      </div>
      <Navigate>
        <h4>Tendencias</h4>
        {trends.length > 18 && (
          <h5
            onClick={() => {
              navigate("/more/tendencias");
              dispatch(listMore(trends));
            }}
          >
            VER MÁS
          </h5>
        )}
      </Navigate>
      <SliderCovers data={trends} />
      <Navigate>
        <h4>Más valoradas</h4>
        {mostValued.length > 18 && (
          <h5
            onClick={() => {
              navigate("/more/valoradas");
              dispatch(listMore(mostValued));
            }}
          >
            VER MÁS
          </h5>
        )}
      </Navigate>
      <SliderCovers data={mostValued} />

      <Navigate>
        <h4>Peliculas populares</h4>
        {popularMovies.length > 18 && (
          <h5
            onClick={() => {
              navigate("/more/populares");
              dispatch(listMore(popularMovies));
            }}
          >
            VER MÁS
          </h5>
        )}
      </Navigate>
      <SliderCovers data={popularMovies} />
      <Navigate>
        <h4>Programas de Tv</h4>
        {popularTv.length > 18 && (
          <h5
            onClick={() => {
              navigate("/more/tv");
              dispatch(listMore(popularTv));
            }}
          >
            VER MÁS
          </h5>
        )}
      </Navigate>
      <SliderCovers data={popularTv} />
      <Navigate>
        <h4>Proximos estrenos</h4>
        {upcoming.length > 18 && (
          <h5
            onClick={() => {
              navigate("/more/estrenos");
              dispatch(listMore(upcoming));
            }}
          >
            VER MÁS
          </h5>
        )}
      </Navigate>
      <div className={styles.containerLaunches}>
        <div className={styles.textsLaunches}>
          <h1>Descubre lo nuevo</h1>
          <h2>JetsMovie te trae todas las peliculas que estan por salir</h2>
          <p>nuevo contenido para disfrutar en familia.</p>
        </div>
        <SliderReleases data={upcoming} />
      </div>
    </div>
  );
};
