import service from "../services/api";
import { useDispatch } from "react-redux";
import { updateAuthor, updateUser } from "../redux/slices/users/usersSlice";
import { useNavigate } from "react-router-dom";
import { clearErrorMessage, onLogout } from "../redux/slices/auth/authSlice";

export const useUsers = () => {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getAuthor = async (id) => {
    try {
      const { data } = await service.get(`/users/${id}/author/`);
      dispatch(updateAuthor(data));
    } catch (error) {
      console.log(error);
    }
  };

  const getUser = async () => {
    try {
      const { data } = await service.get("/users/profile/", {
        headers: {
          Authorization: `token ${token}`,
        },
      });
      dispatch(updateUser(data));
    } catch (error) {
      console.log(error);
    }
  };

  const updateDataProfile = async ({ formState }) => {
    try {
      const { data } = await service.put("/users/profile/", formState, {
        headers: {
          Authorization: `token ${token}`,
        },
      });
      dispatch(updateUser(data));
      navigate("/profile");
    } catch (error) {
      dispatch(onLogout("Datos incorrecto"));
      console.log(error);
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 3000);
    }
  };

  return {
    getAuthor,
    getUser,
    updateDataProfile,
  };
};
