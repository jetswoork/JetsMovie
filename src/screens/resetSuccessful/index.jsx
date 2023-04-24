import styles from "./styles.module.css";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import aprobado from "../../assets/png/aprobado.png";

export const ResetSuccessful = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.users);

  useEffect(() => {
    setTimeout(() => {
      navigate("/login");
    }, 3000);
  }, []);

  return (
    <div className={styles.containerWelcome}>
      <div className={`${styles.welcome} animate__animated animate__fadeIn`}>
        <img src={aprobado} alt="" />
        <h2>Tu contraseña fue cambiada Exitosamente </h2>
        <hr />
        <h2>Inicia sesion nuevamente </h2>
      </div>
    </div>
  );
};
