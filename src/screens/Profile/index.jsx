import styles from "./styles.module.css";
import service from "../../services/api";
import htmr from "htmr";
import addPicture from "../../assets/svg/addPicture.svg";
import defecto from "../../assets/png/defecto.jpg";
import bannerDefecto from "../../assets/png/bannerDefecto.jpg";
import rigth from "../../assets/svg/rigth.svg";
import { Fragment, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearUser, updateUser } from "../../redux/slices/users/usersSlice";
import { onLogout } from "../../redux/slices/auth/authSlice";
import { Loader } from "../../components/Loader";

export const Profile = () => {
  const token = localStorage.getItem("token");
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const profileInputRef = useRef();
  const bannerInputRef = useRef();
  const { user } = useSelector((state) => state.users);
  const {
    email,
    banner,
    description,
    first_name,
    last_name,
    image,
    pfav,
    cfav,
    membership,
  } = user;

  const profileInputChange = async ({ target }) => {
    if (target.files === 0) return;
    const formData = new FormData();
    const imagefile = target.files;
    formData.append("email", email);
    formData.append("image", imagefile[0]);
    console.log("formData:", formData);
    try {
      const { data } = await service.put("/users/profile/", formData, {
        headers: {
          Authorization: `token ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      dispatch(updateUser(data));
    } catch (error) {
      console.log(error);
    }
  };

  const bannerInputChange = async ({ target }) => {
    if (target.files === 0) return;
    const formData = new FormData();
    const imagefile = target.files;
    formData.append("email", email);
    formData.append("banner", imagefile[0]);
    try {
      const { data } = await service.put("/users/profile/", formData, {
        headers: {
          Authorization: `token ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      dispatch(updateUser(data));
    } catch (error) {
      console.log(error);
    }
  };

  const Logout = () => {
    dispatch(clearUser());
    dispatch(onLogout());
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <Fragment>
      {(pfav,
      cfav,
      membership,
      description,
      first_name,
      last_name,
      image === undefined) ? (
        <Loader />
      ) : (
        <div className={`${styles.profile} animate__animated animate__fadeIn`}>
          <div className={styles.relative}>
            <div className={styles.containerFront}>
              {banner ? (
                banner.includes("https") ? (
                  <img src={banner} alt="" />
                ) : (
                  <img src={`https://api.dev.munda.club${banner}`} alt="" />
                )
              ) : (
                <img src={bannerDefecto} alt="" />
              )}
            </div>
            <div
              onClick={() => bannerInputRef.current.click()}
              className={styles.containerAddPictures}
            >
              <img src={addPicture} alt="" />
            </div>
            <div className={styles.containerProfile}>
              {image ? (
                image.includes("https") ? (
                  <img src={image} alt="" />
                ) : (
                  <img src={`https://api.dev.munda.club${image}`} alt="" />
                )
              ) : (
                <img src={defecto} alt="" />
              )}
              <div
                onClick={() => profileInputRef.current.click()}
                className={styles.containerAddPicturesProfile}
              >
                <img src={addPicture} alt="" />
              </div>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.containerTextsProfile}>
              <h3>
                {htmr(first_name)} {htmr(last_name)}
              </h3>
              <p>{htmr(description)}</p>
            </div>
            <div className={styles.containerBoxs}>
              <div
                className={styles.box}
                onClick={() => navigate("/profile/edit")}
              >
                <h3>Editar perfil</h3>
                <img src={rigth} alt="" />
              </div>
              <div
                className={styles.box}
                onClick={() => navigate("/conditions")}
              >
                <h3>Términos y condiciones</h3>
                <img src={rigth} alt="" />
              </div>

              <div onClick={Logout} className={styles.logout}>
                <h3>Cerrar sesión</h3>
              </div>
            </div>
          </div>
          <input
            ref={profileInputRef}
            onChange={profileInputChange}
            style={{ display: "none" }}
            type="file"
          />
          <input
            ref={bannerInputRef}
            onChange={bannerInputChange}
            style={{ display: "none" }}
            type="file"
          />
        </div>
      )}
    </Fragment>
  );
};
