import Modal from "react-modal";
import styles from "./styles.module.css";
import { useModal } from "../../hooks/useModal";
import { useLocation } from "react-router-dom";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TelegramShareButton,
  TelegramIcon,
} from "react-share";

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

export const ModalShare = () => {
  const location = useLocation();
  const { shareModalOpen, closeShareModal } = useModal();

  const shareUrl = `https://jetsmovie.netlify.app${location.pathname}`;

  return (
    <Modal
      isOpen={shareModalOpen}
      onRequestClose={closeShareModal}
      style={customStyles}
      className={styles.modal}
      overlayClassName={styles.modalFondo}
      closeTimeoutMS={200}
    >
      <div className={styles.modalShare}>
        <h2>Comparte con tus amigos</h2>
        <div className={styles.containerIcon}>
          <FacebookShareButton url={shareUrl} onClick={closeShareModal}>
            <FacebookIcon className={styles.icon} />
          </FacebookShareButton>
          <WhatsappShareButton url={shareUrl} onClick={closeShareModal}>
            <WhatsappIcon className={styles.icon} />
          </WhatsappShareButton>
          <TwitterShareButton url={shareUrl} onClick={closeShareModal}>
            <TwitterIcon className={styles.icon} />
          </TwitterShareButton>
          <LinkedinShareButton url={shareUrl} onClick={closeShareModal}>
            <LinkedinIcon className={styles.icon} />
          </LinkedinShareButton>
          <TelegramShareButton url={shareUrl} onClick={closeShareModal}>
            <TelegramIcon className={styles.icon} />
          </TelegramShareButton>
        </div>
      </div>
    </Modal>
  );
};
