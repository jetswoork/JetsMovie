import styles from "./styles.module.css";
import logo from "../../assets/png/logo.png";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useAuthStore } from "../../hooks/useAuthStore";
import { useSelector } from "react-redux";

const initialForm = {
  email: "",
};

export const Recovery = () => {
  const { recovery } = useAuthStore();
  const navigate = useNavigate();
  const { errorMessage } = useSelector((state) => state.auth);
  const { formState, setFormState, handleChange } = useForm(initialForm);

  const handlesubmit = (event) => {
    event.preventDefault();
    recovery({ formState });
    setFormState(initialForm);
  };

  return (
    <div className={styles.container}>
      <div
        className={`${styles.containerLogin} animate__animated animate__fadeIn`}
      >
        <div className={styles.containerLogo}>
          <img src={logo} alt="" />
          <h4>
            Introduce tu correo de la cuenta de JetsMovie, te enviaremos un
            código de verificación a la consola para poder generar una nueva
            contraseña.
          </h4>
        </div>
        {errorMessage === undefined ? null : (
          <p className={styles.error}>{errorMessage.payload}</p>
        )}
        <div className={styles.form}>
          <form onSubmit={handlesubmit}>
            <div className={styles.containerInput}>
              <input
                type="email"
                className={styles.input}
                placeholder="Correo electrónico"
                name="email"
                value={formState.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.containerButton}>
              <button type="submit">Enviar</button>
            </div>
            <div className={styles.politic}>
              <p>
                ¿Tienes una cuenta?{" "}
                <b onClick={() => navigate("/login")}>Inicia sesion</b>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
