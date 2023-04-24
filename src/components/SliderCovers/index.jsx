import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import logoCurso from "../../assets/svg/logoCurso.svg";
import styles from "./styles.module.css";
import htmr from "htmr";
import { useNavigate } from "react-router-dom";
import { Loader } from "../Loader";
import { Responsive } from "../SliderResponsive";
import { CardCovers } from "../Cards/covers";

export const SliderCovers = ({ data }) => {
  const navigate = useNavigate();
  return (
    <Carousel
      removeArrowOnDeviceType={["tabletP", "mobileP", "mobileM", "mobileG"]}
      partialVisible={true}
      responsive={Responsive}
      additionalTransfrom={0}
      arrows
      draggable={false}
      centerMode={false}
      className={styles.carousel}
      containerClass={styles.containerCarousel}
      dotListClass={styles.dotList}
      focusOnSelect={false}
      infinite
      itemClass={styles.items}
      keyBoardControl
      minimumTouchDrag={80}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      sliderClass={styles.slider}
      slidesToSlide={1}
      swipeable
    >
      {data.map((dat, key) => (
        <div
          key={key}
          className={styles.containerCurso}
          onClick={() => {
            navigate(`/movie/${dat.id}`);
          }}
        >
          <CardCovers data={dat} />
        </div>
      ))}
    </Carousel>
  );
};
