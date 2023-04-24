import styles from "./styles.module.css";
import "animate.css";
import { useSelector } from "react-redux";
import { ModalShare } from "../ModalShare";
import guardar from "../../assets/interaction/guardar.png";
import guardarw from "../../assets/interaction/guardarW.png";
import like from "../../assets/interaction/like.png";
import likew from "../../assets/interaction/likeW.png";
import disLike from "../../assets/interaction/dislike.png";
import disLikew from "../../assets/interaction/disLikeW.png";
import superLike from "../../assets/interaction/superLike.png";
import superLikew from "../../assets/interaction/superLikeW.png";
import compartirw from "../../assets/interaction/compartirw.png";
import { Fragment, useEffect, useState } from "react";
import { useModal } from "../../hooks/useModal";

export const Buttons = ({ id }) => {
  const [animacion, setAnimacion] = useState("second");
  const [activateLike, setActivateLike] = useState(false);
  const [activateDisLike, setActivateDisLike] = useState(false);
  const [activateSuperLike, setActivateSuperLike] = useState(false);
  const [mainActive, setMainActive] = useState(false);
  const [activateFavo, setActivateFavo] = useState(false);
  const [animate, setAnimate] = useState(false);
  const { status } = useSelector((state) => state.auth);
  const { openShareModal, openAlert } = useModal();

  const condition = () => {
    if (status === "" || status === "not-authenticated") {
      openAlert();
    }
  };
  return (
    <Fragment>
      <ModalShare />
      <div className={styles.buttons}>
        <div className={styles.rela} onClick={condition}>
          <div>
            {!status === "not-authenticated" ? (
              <img src={like} alt="" />
            ) : mainActive === false ? (
              <img onClick={() => setAnimate(true)} src={like} alt="" />
            ) : (
              <>
                {(activateLike && (
                  <img
                    onClick={() => setAnimate(true)}
                    className="animate__animated animate__zoomIn animate__faster"
                    src={likew}
                    alt=""
                  />
                )) ||
                  (activateDisLike && (
                    <img
                      onClick={() => setAnimate(true)}
                      className="animate__animated animate__zoomIn animate__faster"
                      src={disLikew}
                      alt=""
                    />
                  )) ||
                  (activateSuperLike && (
                    <img
                      onClick={() => setAnimate(true)}
                      className="animate__animated animate__zoomIn animate__faster"
                      src={superLikew}
                      alt=""
                    />
                  ))}
              </>
            )}
          </div>
          {animate ? (
            <div
              onClick={() => setAnimate(false)}
              className={`${styles.open} ${
                animate && "animate__animated animate__zoomIn"
              } `}
            >
              {activateDisLike === false ? (
                <img
                  onClick={() => {
                    setMainActive(true);
                    setActivateDisLike(true);
                  }}
                  src={disLike}
                  alt=""
                />
              ) : (
                <img
                  onClick={() => {
                    setMainActive(false);
                    setActivateDisLike(false);
                  }}
                  src={disLikew}
                  alt=""
                />
              )}
              {activateLike === false ? (
                <img
                  onClick={() => {
                    setMainActive(true);
                    setActivateLike(true);
                  }}
                  src={like}
                  alt=""
                />
              ) : (
                <img
                  onClick={() => {
                    setMainActive(false);
                    setActivateLike(false);
                  }}
                  src={likew}
                  alt=""
                />
              )}
              {activateSuperLike === false ? (
                <img
                  onClick={() => {
                    setMainActive(true);
                    setActivateSuperLike(true);
                  }}
                  src={superLike}
                  alt=""
                />
              ) : (
                <img
                  onClick={() => {
                    setMainActive(false);
                    setActivateSuperLike(false);
                  }}
                  src={superLikew}
                  alt=""
                />
              )}
            </div>
          ) : (
            <></>
          )}
        </div>
        <div
          onClick={() => {
            setActivateFavo(!activateFavo);
          }}
        >
          {!activateFavo ? (
            <img src={guardar} alt="" />
          ) : (
            <img
              className="animate__animated animate__zoomIn animate__faster "
              src={guardarw}
              alt=""
            />
          )}
        </div>
        <div onClick={() => openShareModal()}>
          <img src={compartirw} alt="" />
        </div>
      </div>
    </Fragment>
  );
};
