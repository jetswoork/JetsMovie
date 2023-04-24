import { useDispatch, useSelector } from "react-redux/es/exports";
import {
  loginCloseModal,
  loginOpenModal,
  openModalLike,
  closeModalLike,
  openModalInvoice,
  closeModalInvoice,
  shareCloseModal,
  shareOpenModal,
} from "../redux/slices/modal/modalSlice";

export const useModal = () => {
  const { loginModalOpen, modalLikeOpen, shareModalOpen, invoiceOpen } =
    useSelector((state) => state.modal);
  const dispatch = useDispatch();

  const openLoginModal = () => {
    dispatch(loginOpenModal());
  };

  const closeLoginModal = () => {
    dispatch(loginCloseModal());
  };

  const openAlert = () => {
    dispatch(openModalLike());
  };

  const closeAlert = () => {
    dispatch(closeModalLike());
  };

  const openInvoices = () => {
    dispatch(openModalInvoice());
  };

  const closeInvoices = () => {
    dispatch(closeModalInvoice());
  };
  const openShareModal = () => {
    dispatch(shareOpenModal());
  };

  const closeShareModal = () => {
    dispatch(shareCloseModal());
  };

  return {
    loginModalOpen,
    modalLikeOpen,
    invoiceOpen,
    shareModalOpen,

    openLoginModal,
    closeLoginModal,
    openAlert,
    closeAlert,
    openInvoices,
    closeInvoices,
    openShareModal,
    closeShareModal,
  };
};
