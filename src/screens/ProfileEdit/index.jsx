import styles from "./styles.module.css";
import back from "../../assets/svg/back.svg";
import { useForm } from "../../hooks/useForm";
import eye from "../../assets/svg/eye.svg";
import { useState } from "react";
import { useUsers } from "../../hooks/useUsers";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const initialForm = {
  first_name: "",
  last_name: "",
  email: "",
  description: "",
  gender: "",
  birth_date: "",
  password: "",
  password2: "",
};

export const ProfileEdit = () => {
  const navigate = useNavigate();
  const { updateDataProfile } = useUsers();
  const maxDay = new Date().toISOString().split("T")[0];
  const [view1, setView1] = useState(false);
  const [view2, setView2] = useState(false);
  const { formState, setFormState, handleChange } = useForm(initialForm);
  const { user } = useSelector((state) => state.users);
  const { description, first_name, last_name, email, gender } = user;

  const handlesubmit = (event) => {
    event.preventDefault();
    updateDataProfile({ formState });
    setFormState(initialForm);
  };

  return (
    <div className={styles.container}>
      <div className={styles.back}>
        <img src={back} alt="" onClick={() => navigate("/profile")} />
        <p className={styles.link} onClick={() => navigate("/profile")}>
          volver
        </p>
      </div>
      <div
        className={`${styles.containerRegister} animate__animated animate__fadeIn`}
      >
        <div className={styles.form}>
          <form
            className={styles.containerForm}
            action="#"
            onSubmit={handlesubmit}
          >
            <h4>Editar perfil</h4>
            <div className={styles.row}>
              <div className={styles.containerInput}>
                <input
                  type="text"
                  className={styles.input}
                  placeholder={first_name}
                  name="first_name"
                  value={formState.first_name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.containerInput}>
                <input
                  type="text"
                  className={styles.input}
                  placeholder={last_name}
                  name="last_name"
                  value={formState.last_name}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.containerInputDate}>
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
                <select
                  className={styles.sexo}
                  placeholder="Sexo"
                  name="gender"
                  value={formState.gender}
                  onChange={handleChange}
                >
                  <option>
                    {(gender === "M" && "Masculino") ||
                      (gender === "F" && "Femenino") ||
                      (gender === "U" && "Indefinido")}
                  </option>
                  <option value="F">Femenino</option>
                  <option value="M">Masculino</option>
                  <option value="U">Indefinido</option>
                </select>
              </div>
            </div>
            <div className={styles.containerInput}>
              <input
                type="email"
                className={styles.input}
                placeholder={email}
                name="email"
                value={formState.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.containerInput}>
              <input
                type="text"
                placeholder={description === "" ? "descripción" : description}
                name="description"
                maxLength="70"
                value={formState.description}
                onChange={handleChange}
              ></input>
            </div>
            <div className={styles.containerInput}>
              <input
                type={view1 ? "text" : "password"}
                className={styles.input}
                placeholder="Cambiar contraseña"
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
                onChange={handleChange}
                name="password2"
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
                Guardar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
