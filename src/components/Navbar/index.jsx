import styles from "./styles.module.css";
import search from "../../assets/svg/search.svg";
import queryString from "query-string";
import logo from "../../assets/png/logo.png";
import { useNavigate, useLocation } from "react-router-dom";
import { ModalLogin } from "../ModalLogin";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../hooks/useModal";
import { useGetMovies } from "../../hooks/useGetMovies";
import { updateMovie } from "../../redux/slices/movies/moviesSlice";

export const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { searchMovie } = useGetMovies();
  const { openLoginModal } = useModal();
  const dispatch = useDispatch();
  const [productsFound, setProductsFound] = useState([]);
  const [valueInput, setValueInput] = useState("");
  const { q = "" } = queryString.parse(location.search);

  const onSearch = async (event) => {
    const { value } = event.target;
    setValueInput(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!valueInput.length) return;
    const result = await searchMovie(valueInput);
    dispatch(updateMovie(result.results));
    navigate(`/search?q=${valueInput}`);
  };

  return (
    <nav className={styles.navbar}>
      <ModalLogin />
      <div onClick={() => navigate("/")} className={styles.logo}>
        <h2>Jets</h2>
        <img src={logo} alt="" />
      </div>
      <div className={styles.search}>
        <form action="#" className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Buscar..."
            name="searching"
            autoComplete="off"
            value={valueInput}
            onChange={onSearch}
          />
        </form>
        <img src={search} alt="" onClick={handleSubmit} />
      </div>
      <div className={styles.container}>
        <img src={search} onClick={() => navigate("/search?mobile=true")} />
      </div>
      <div className={styles.containerButton}>
        <button onClick={() => openLoginModal()} className={styles.login}>
          Entrar
        </button>
        <button
          onClick={() => navigate("/register")}
          className={styles.register}
        >
          Crear Cuenta
        </button>
      </div>
    </nav>
  );
};
