import styles from "./styles.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import blinder1 from "../../assets/png/blinder1.jpg";
import bad2 from "../../assets/png/bad2.jpg";

const init = [blinder1, bad2];

const responsive = {
  desktop: {
    breakpoint: {
      max: 5000,
      min: 1280,
    },
    items: 1,
  },
  mobile: {
    breakpoint: {
      max: 480,
      min: 0,
    },
    items: 1,
  },
  tablet: {
    breakpoint: {
      max: 1280,
      min: 480,
    },
    items: 1,
  },
};

export const Promotion = () => {
  return (
    <Carousel
      removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
      responsive={responsive}
      additionalTransfrom={0}
      arrows
      autoPlay
      autoPlaySpeed={6000}
      centerMode={false}
      className={styles.carousel}
      containerClass={styles.containerCarousel}
      dotListClass={styles.dotList}
      infinite
      itemClass={styles.items}
      keyBoardControl
      minimumTouchDrag={80}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      sliderClass={styles.slider}
      showDots={true}
      slidesToSlide={1}
      swipeable
    >
      {init.map((data, key) => (
        <div key={key} className={styles.containerPromotion}>
          <div className={styles.containerImg}>
            <img src={data} alt="" />
          </div>
          <div className={styles.containerText}>
            <h2>Jesus Tedesco</h2>
            <h3>Desarrollador Frontend</h3>
            <a
              className={styles.containerButton}
              href="https://portfoliotedesco.netlify.app"
              target="_blank"
            >
              <button>Ver más sobre mi</button>
            </a>
          </div>
        </div>
      ))}
    </Carousel>
  );
};
