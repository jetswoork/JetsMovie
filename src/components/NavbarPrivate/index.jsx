import styles from "./styles.module.css";
import queryString from "query-string";
import { Link, useLocation, useNavigate } from "react-router-dom";
import search from "../../assets/svg/search.svg";
import defecto from "../../assets/png/defecto.jpg";
import comunidad from "../../assets/png/comunidad.png";
import logo from "../../assets/png/logo.png";
import home from "../../assets/png/home.png";
import recorrido from "../../assets/png/recorrido.png";
import { useDispatch, useSelector } from "react-redux";
import { Fragment, useEffect, useState } from "react";
import { useUsers } from "../../hooks/useUsers";
import { useForm } from "../../hooks/useForm";
import { updateMovie } from "../../redux/slices/movies/moviesSlice";
import { useGetMovies } from "../../hooks/useGetMovies";

export const NavbarPrivate = () => {
  const { user } = useSelector((state) => state.users);
  const { image, ucv, pcompleteds, ccompleteds } = user;
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { getUser } = useUsers();
  const { searchMovie } = useGetMovies();
  const { formState, handleChange } = useForm({ searchText: "" });
  const { searchText } = formState;
  const [productsFound, setProductsFound] = useState([]);
  const [valueInput, setValueInput] = useState("");
  const { q = "" } = queryString.parse(location.search);

  useEffect(() => {
    getUser();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!valueInput.length) return;
    const result = await searchMovie(valueInput);
    setProductsFound(result.results);
    dispatch(updateMovie(result.results));
    navigate(`/search?q=${valueInput}`);
  };

  return (
    <Fragment>
      {location.pathname.includes("payment") ? (
        <div className={styles.navbarPayment}>
          {/* <img src={logo} alt="" /> */}
        </div>
      ) : (
        <nav className={styles.navbar}>
          <div onClick={() => navigate("/")} className={styles.logo}>
            <h2>Jets</h2>
            <img src={logo} alt="" />
          </div>
          <div className={styles.search}>
            <form action="#" className={styles.form} onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Buscar..."
                name="searchText"
                onChange={(event) => {
                  setValueInput(event.target.value);
                  handleChange(event);
                }}
              />
            </form>
            <img onClick={handleSubmit} src={search} alt="" />
          </div>
          <div className={styles.row}>
            <div className={styles.imgnone}>
              <div className={styles.container}>
                <img
                  src={search}
                  onClick={() => navigate("/search?mobile=true")}
                />
                <p>Buscar</p>
              </div>
              <div className={styles.container}>
                <img src={home} onClick={() => navigate("/")} />
                <p>Home</p>
              </div>
            </div>
            <div className={styles.route}></div>
          </div>
          <div onClick={() => navigate("/profile")} className={styles.profile}>
            {image ? (
              image.includes("https") ? (
                <img src={image} alt="" />
              ) : (
                <img src={`https://api.dev.munda.club${image}`} alt="" />
              )
            ) : (
              <img src={defecto} alt="" />
            )}
          </div>
        </nav>
      )}
    </Fragment>
  );
};
