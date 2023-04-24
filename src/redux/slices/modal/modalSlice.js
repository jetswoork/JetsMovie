import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    loginModalOpen: false,
    modalLikeOpen: false,
    invoiceOpen: false,
    shareModalOpen: false,
  },
  reducers: {
    loginOpenModal: (state) => {
      state.loginModalOpen = true;
    },
    loginCloseModal: (state) => {
      state.loginModalOpen = false;
    },
    openModalLike: (state) => {
      state.modalLikeOpen = true;
    },
    closeModalLike: (state) => {
      state.modalLikeOpen = false;
    },
    openModalInvoice: (state) => {
      state.invoiceOpen = true;
    },
    closeModalInvoice: (state) => {
      state.invoiceOpen = false;
    },
    shareOpenModal: (state) => {
      state.shareModalOpen = true;
    },
    shareCloseModal: (state) => {
      state.shareModalOpen = false;
    },
  },
});

export const {
  loginOpenModal,
  loginCloseModal,
  openModalLike,
  closeModalLike,
  openModalInvoice,
  closeModalInvoice,
  shareOpenModal,
  shareCloseModal,
} = modalSlice.actions;
