import styles from "./styles.module.css";
import Swal from "sweetalert2";
import facebook from "../../assets/png/facebook.png";
import portfolio from "../../assets/png/portafolio.png";
import gmail from "../../assets/png/gmail.png";
import whatsapp from "../../assets/png/whatsapp.png";
import linkedin from "../../assets/png/linkedin.png";
import github from "../../assets/png/github.png";
import { useNavigate } from "react-router-dom";

export const Footer = () => {
  const navigate = useNavigate();

  const alerta = () => {
    Swal.fire({
      title: "Advertencia",
      text: "¡te voy redirigir a Fakebook, una aplicacion parecida a facebook pero fue creada por mi!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#014550",
      cancelButtonColor: "#e42530",
      cancelButtonText: "Cancelar",
      confirmButtonText: "¡ok!",
      customClass: {
        confirmButton: "custom-button",
        cancelButton: "custom-cancel",
        htmlContainer: "custom-text",
        title: "custom-title",
        confirmButtonText: "custom-confirm",
        cancelButtonText: "custom-cance",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        window.open("https://fakeebook.netlify.app/");
      }
    });
  };

  return (
    <div className={styles.footer}>
      <div className={styles.containerInfo}>
        <div className={styles.containerLogo}>
          <a href="https://wa.me/+584245496577" target="_blank">
            <img src={whatsapp} alt="" />
          </a>
          <div>
            <img onClick={() => alerta()} src={facebook} alt="" />
          </div>
          <a
            href="https://www.linkedin.com/in/jesus-tedesco-bb9990262/"
            target="_blank"
          >
            <img src={linkedin} alt="" />
          </a>
          <a href="https://github.com/jetswoork" target="_blank">
            <img src={github} alt="" />
          </a>
          <a href="https://portfoliotedesco.netlify.app/" target="_blank">
            <img src={portfolio} alt="" />
          </a>
          <a href="mailto:jetswoork@gmail.com" target="_blank">
            <img src={gmail} alt="" />
          </a>
        </div>
      </div>
      <div className={styles.digitally}>
        <h3>Jesus Tedesco ® 2023 todos los derechos reservados</h3>
      </div>
    </div>
  );
};
