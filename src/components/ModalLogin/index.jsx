import Modal from "react-modal";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import { useModal } from "../../hooks/useModal";
import logoGoogle from "../../assets/svg/logoGoogle.svg";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

export const ModalLogin = () => {
  const { loginModalOpen, closeLoginModal } = useModal();
  const navigate = useNavigate();

  const redirect = () => {
    navigate("/login");
    closeLoginModal();
  };

  const redirectRegister = () => {
    navigate("/register");
    closeLoginModal();
  };

  return (
    <Modal
      isOpen={loginModalOpen}
      onRequestClose={closeLoginModal}
      style={customStyles}
      className={styles.modal}
      overlayClassName={styles.modalFondo}
      closeTimeoutMS={200}
    >
      <div className={styles.modalLogin}>
        <div className={styles.containerTitulo}>
          <h2>Entrar o crear cuenta</h2>
        </div>

        <div className={styles.containerButton}>
          <button className={styles.mund} onClick={() => redirect()}>
            Entrar con JetsMovie
          </button>
          {/* <button className={styles.goo}>
            <img src={logoGoogle} alt="" /> Entrar con Google
          </button> */}
        </div>
        <div className={styles.containerTexts}>
          <h5 onClick={redirectRegister}>Crear cuenta</h5>
          <p>
            Registrándote o saltando esta ventana aceptas los terminos de uso
          </p>
        </div>
      </div>
    </Modal>
  );
};
