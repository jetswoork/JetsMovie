import styles from "./styles.module.css";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/png/logo.png";

export const Welcome = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.users);
  const { first_name, last_name, email, gender } = user;

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 3000);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.containerWelcome}>
        <div className={`${styles.welcome} animate__animated animate__fadeIn`}>
          <img src={logo} alt="" />
          <h2>{first_name} </h2>
          <h2>Tu cuenta fue creada exitosamente </h2>
          <hr />
          {(gender === "M" && <h1>¡Bienvenido! </h1>) ||
            (gender === "F" && <h1>¡Bienvenida!</h1>) ||
            (gender === "U" && <h1>¡Bienvenid@!</h1>)}
        </div>
      </div>
    </div>
  );
};
