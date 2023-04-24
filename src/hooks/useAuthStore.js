import { useDispatch, useSelector } from "react-redux";
import {
  clearErrorMessage,
  onChecking,
  onLogin,
  onLogout,
} from "../redux/slices/auth/authSlice";
import service from "../services/api";
import { useNavigate } from "react-router-dom";
import { updateUser } from "../redux/slices/users/usersSlice";

export const useAuthStore = () => {
  const navigate = useNavigate();
  const { status, errorMessage } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const startLogin = async ({ formState }) => {
    try {
      const { data } = await service.post("/api-token-auth", formState);
      console.log(data);
      localStorage.setItem("token", data);
      dispatch(onLogin());
      navigate("/");
    } catch (error) {
      dispatch(onLogout("Usuario o contraseña incorrecta"));
      console.log(error);
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 3000);
    }
  };

  const startRegister = async ({ formState }) => {
    try {
      const { data } = await service.post("/users/register_user/", formState);
      localStorage.setItem("token", data.token);
      dispatch(updateUser(data));
      dispatch(onLogin());
      navigate("/register/welcome");
    } catch (error) {
      dispatch(onLogout("Correo electronico ya existe"));
      console.log(error);
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 3000);
    }
  };

  const recovery = async ({ formState }) => {
    try {
      const { data } = await service.post("reset_password/", formState);
      console.log("codigo recuperacion:", data.code);
      navigate("/recovery/reset");
    } catch (error) {
      dispatch(onLogout("Correo no existe "));
      console.log(error);
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 3000);
    }
  };

  const resetPassword = async ({ formState }) => {
    try {
      const { data } = await service.post("reset_password/reset/", formState);
      navigate("/recovery/reset/successful");
    } catch (error) {
      dispatch(onLogout("Dato incorrecto"));
      console.log(error);
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 3000);
    }
  };

  return {
    status,
    errorMessage,
    startLogin,
    startRegister,
    recovery,
    resetPassword,
  };
};
