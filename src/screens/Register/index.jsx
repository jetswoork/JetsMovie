import styles from "./styles.module.css";
import { useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import eye from "../../assets/svg/eye.svg";
import { useAuthStore } from "../../hooks/useAuthStore";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const initialForm = {
  first_name: "",
  last_name: "",
  email: "",
  description: "Formo parte de JetsMovie",
  gender: "",
  birth_date: "",
  password: "",
  password2: "",
};

const validationsForm = (formState) => {};

export const Register = () => {
  const navigate = useNavigate();
  const { errorMessage } = useSelector((state) => state.auth);
  const maxDay = new Date().toISOString().split("T")[0];
  const { startRegister } = useAuthStore();
  const [view1, setView1] = useState(false);
  const [view2, setView2] = useState(false);
  const { formState, setErrors, setFormState, handleChange, handleBlur } =
    useForm(initialForm, validationsForm);

  const onDateChange = (event) => {};

  const handlesubmit = (event) => {
    event.preventDefault();
    console.log(formState);
    startRegister({ formState });
    setFormState(initialForm);
    // }
  };

  return (
    <div className={styles.container}>
      <div className={styles.containerRegister}>
        {errorMessage === undefined ? null : (
          <p className={styles.error}>{errorMessage.payload}</p>
        )}
        <div className={`${styles.form} animate__animated animate__fadeIn`}>
          <h4>Crear Cuenta</h4>
          <form action="#" onSubmit={handlesubmit}>
            <div className={styles.row}>
              <div className={styles.containerInput}>
                <input
                  type="text"
                  className={styles.input}
                  placeholder="Nombre"
                  name="first_name"
                  value={formState.first_name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                />
              </div>
              <div className={styles.containerInput}>
                <input
                  type="text"
                  className={styles.input}
                  placeholder="Apellido"
                  name="last_name"
                  value={formState.last_name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                />
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.containerInputDate}>
                <h6>Fecha de nacimiento:</h6>
                <input
                  type="date"
                  min={"1920-01-01"}
                  max={maxDay}
                  className={styles.date}
                  placeholder="Fecha de nacimiento"
                  name="birth_date"
                  value={formState.birth_date}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.containerInputSexo}>
                <h6>Sexo:</h6>
                <select
                  className={styles.sexo}
                  placeholder="Sexo"
                  name="gender"
                  value={formState.gender}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                >
                  <option value="U">Indefinido</option>
                  <option value="F">Femenino</option>
                  <option value="M">Masculino</option>
                </select>
              </div>
            </div>
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

            <div className={styles.containerInput}>
              <input
                type={view2 ? "text" : "password"}
                className={styles.input}
                placeholder="Confirmar contraseña"
                onChange={handleChange}
                name="password2"
                onBlur={handleBlur}
                value={formState.password2}
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
                Crear cuenta
              </button>
            </div>
            <div className={styles.politic}>
              <p>
                Al continuar, aceptas las
                <b onClick={() => navigate("/conditions")}>
                  Condiciones de servicio
                </b>
                de JetsMovie y reconoces que leíste nuestra
                <b onClick={() => navigate("/politics")}>
                  Política de privacidad.
                </b>
                <br />
                <b>Aviso de recopilación de información</b>
              </p>
              <p>
                ¿Ya eres miembro?
                <Link className={styles.link} to={"/login"}>
                  <b>Inicia Sesion</b>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
