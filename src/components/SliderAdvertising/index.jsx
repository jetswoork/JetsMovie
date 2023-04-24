import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./styles.module.css";
import htmr from "htmr";
import meditacion from "../../assets/png/meditacion.png";

const responsive = {
  desktop: {
    breakpoint: {
      max: 5000,
      min: 1280,
    },
    items: 1,
    // partialVisibilityGutter: 40,
  },
  mobile: {
    breakpoint: {
      max: 480,
      min: 0,
    },
    items: 1,
    // partialVisibilityGutter: 30,
  },
  tablet: {
    breakpoint: {
      max: 1280,
      min: 480,
    },
    items: 1,
    // partialVisibilityGutter: 30,
  },
};

export const SliderAdvertising = ({ data }) => {
  return (
    <Carousel
      responsive={responsive}
      additionalTransfrom={0}
      arrows
      removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
      draggable={false}
      centerMode={false}
      className={styles.carousel}
      containerClass={styles.containerCarousel}
      dotListClass={styles.dotList}
      focusOnSelect={false}
      infinite
      itemClass={styles.items}
      keyBoardControl
      showDots={true}
      minimumTouchDrag={80}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      sliderClass={styles.slider}
      slidesToSlide={1}
      swipeable
    >
      <div className={styles.containerAdvertising}>
        <div className={styles.containerImage}>
          <img src={meditacion} alt="" />
        </div>
        <div className={styles.containerTextss}>
          <h2>Jets Movie esta echa por Jesus Tedesco</h2>
          <h5>Soy un desarrollador frontend con 2 años de experiencia</h5>
        </div>
      </div>
    </Carousel>
  );
};
