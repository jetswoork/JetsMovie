import styles from "./styles.module.css";
import eye from "../../assets/svg/eye.svg";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useAuthStore } from "../../hooks/useAuthStore";
import { useSelector } from "react-redux";
import { useState } from "react";

const initialForm = {
  email: "",
  password: "",
};

const validationsForm = (formState) => {
  let errors = {};

  return errors;
};

export const Login = () => {
  const { startLogin } = useAuthStore();
  const navigate = useNavigate();
  const { errorMessage } = useSelector((state) => state.auth);
  const [view1, setView1] = useState(false);
  const {
    formState,
    errors,
    validateForm,
    setErrors,
    setFormState,
    handleChange,
    handleBlur,
  } = useForm(initialForm, validationsForm);

  const handlesubmit = (event) => {
    event.preventDefault();
    setErrors(validateForm(formState));
    if (Object.keys(errors).length === 0) {
      startLogin({ formState });
      setFormState(initialForm);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.containerLogin}>
        {errorMessage === undefined ? null : (
          <p className={styles.error}>{errorMessage.payload}</p>
        )}
        <div className={`${styles.form} animate__animated animate__fadeIn`}>
          <h4>Iniciar sesion</h4>
          <form onSubmit={handlesubmit}>
            <div className={styles.containerInput}>
              <input
                type="email"
                className={styles.input}
                placeholder="Correo electrónico"
                name="email"
                value={formState.email}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
            </div>

            <div className={styles.containerInput}>
              <input
                type={view1 ? "text" : "password"}
                className={styles.input}
                placeholder="Contraseña"
                name="password"
                value={formState.password}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              <img onClick={() => setView1(!view1)} src={eye} alt="" />
            </div>
            <div className={styles.containerButton}>
              <button type="submit">Iniciar sesion</button>
            </div>
            <div className={styles.politic}>
              <p>
                Al continuar, aceptas las
                <b onClick={() => navigate("/conditions")}>
                  Condiciones de servicio
                </b>{" "}
                {}
                de JetsMovie y reconoces que leíste nuestra{" "}
                <b onClick={() => navigate("/politics")}>
                  Política de privacidad
                </b>
                .
              </p>
              <p>
                <br />
                ¿No tienes una cuenta?
                <Link className={styles.link} to={"/register"}>
                  <b>Registrate</b>
                </Link>
              </p>
              <br />
              <p
                onClick={() => navigate("/recovery")}
                className={styles.paswoord}
              >
                ¿Has olvidado la contraseña?
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
