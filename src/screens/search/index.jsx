import styles from "./styles.module.css";
import queryString from "query-string";
import separator from "../../assets/svg/separator.svg";
import searc from "../../assets/svg/search.svg";
import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { SearchResults } from "../../components/Search";
import { Navigate } from "../../components/Navigate";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { SliderCovers } from "../../components/SliderCovers";
import { listMore, updateMovie } from "../../redux/slices/movies/moviesSlice";
import { useGetMovies } from "../../hooks/useGetMovies";

export const Search = () => {
  const { searchMovie } = useGetMovies();
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [valueInput, setValueInput] = useState("");
  const { formState, handleChange } = useForm({ searchText: "" });
  const { searchText } = formState;
  const [nameCategory, setNameCategory] = useState();
  const { q = "" } = queryString.parse(location.search);
  const { trends, mostValued, upcoming, moviesFound } = useSelector(
    (state) => state.movies
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!valueInput.length) return;
    const result = await searchMovie(valueInput);
    dispatch(updateMovie(result.results));
    navigate(`?q=${valueInput}`);
  };

  return (
    <Fragment>
      <div
        className={`${styles.containerSearching} animate__animated animate__fadeIn`}
      >
        <div className={styles.search}>
          <form action="#" className={styles.form} onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="¿Qué deseas ver?"
              maxLength={30}
              name="searchText"
              autoComplete="off"
              value={valueInput}
              onChange={({ target }) => {
                setValueInput(target.value);
              }}
            />
          </form>
          <img onClick={handleSubmit} src={searc} alt="" />
        </div>
        <h5>Lo más buscado: </h5>
        <div className={styles.mostWanted}></div>

        {location.search.includes("mobile") ? null : moviesFound.length ===
          0 ? (
          <div className={styles.notFound}>
            <h1>¡Ups!</h1>
            <h3>No hemos obtenido resultados relacionados sobre: "{q}"</h3>
            <img src={separator} alt="" />
            <h2>
              De todas maneras explora nuestro contenido <br />
              recomendado para ti.
            </h2>
          </div>
        ) : (
          <>
            <div className={styles.view}>
              {moviesFound.length > 0 ? (
                <h2>Resultados obtenidos sobre: "{q}" </h2>
              ) : null}
            </div>
            <div className={styles.containerFound}>
              {moviesFound.map((product, key) => (
                <SearchResults key={key} data={product} />
              ))}
            </div>
          </>
        )}
        {nameCategory ? (
          <>
            <div className={styles.view}>
              <h2>Resultados obtenidos sobre: "{nameCategory}" </h2>
            </div>
            <div className={styles.containerFound}></div>
          </>
        ) : null}

        <div className={styles.view}>
          <h3>Recomendados</h3>
        </div>
      </div>
      <div className={styles.containerdwdw}>
        <Navigate>
          <h4>Peliculas populares</h4>
          {upcoming.length > 18 && (
            <h5
              onClick={() => {
                navigate("/more/populares");
                dispatch(listMore(upcoming));
              }}
            >
              VER MÁS
            </h5>
          )}
        </Navigate>
        <SliderCovers data={upcoming} />
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
      </div>
    </Fragment>
  );
};
