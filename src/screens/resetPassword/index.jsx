import styles from "./styles.module.css";
import eye from "../../assets/svg/eye.svg";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useAuthStore } from "../../hooks/useAuthStore";
import { useSelector } from "react-redux";
import { useState } from "react";

const initialForm = {
  code: "",
  password: "",
  password2: "",
};

export const ResetPassword = () => {
  const navigate = useNavigate();
  const { resetPassword } = useAuthStore();
  const { errorMessage } = useSelector((state) => state.auth);
  const [view1, setView1] = useState(false);
  const [view2, setView2] = useState(false);
  const { formState, setFormState, handleChange } = useForm(initialForm);

  const handlesubmit = (event) => {
    event.preventDefault();
    resetPassword({ formState });
    setFormState(initialForm);
  };

  return (
    <div className={styles.container}>
      <div className={styles.containerLogin}>
        <div className={styles.containerLogo}>
          {/* <img src={logoMundaw} alt="" /> */}
          <h4>Introduce el código y la nueva contraseña</h4>
        </div>
        {errorMessage === undefined ? null : (
          <p className={styles.error}>{errorMessage.payload}</p>
        )}
        <div className={`${styles.form} animate__animated animate__fadeIn`}>
          <form onSubmit={handlesubmit}>
            <div className={styles.containerInput}>
              <input
                type="text"
                className={styles.input}
                placeholder="Codigo de verificacion"
                name="code"
                value={formState.code}
                onChange={handleChange}
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
                required
              />
              <img onClick={() => setView1(!view1)} src={eye} alt="" />
            </div>

            <div className={styles.containerInput}>
              <input
                type={view2 ? "text" : "password"}
                className={styles.input}
                placeholder="Confirmar contraseña"
                name="password2"
                value={formState.password2}
                onChange={handleChange}
                required
              />
              <img onClick={() => setView2(!view2)} src={eye} alt="" />
            </div>
            {formState.password2 === formState.password ? null : (
              <div className={styles.error}>
                <p>Contraseñas no coinciden</p>
              </div>
            )}
            <div className={styles.containerButton}>
              <button
                disabled={formState.password2 != formState.password}
                type="submit"
              >
                Entrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
