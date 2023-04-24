import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import styles from "./styles.module.css";
import { CardCovers } from "../Cards/covers";
import { useNavigate } from "react-router-dom";

const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1280,
    },
    items: 3.5,
    partialVisibilityGutter: 0,
  },
  mobile: {
    breakpoint: {
      max: 390,
      min: 0,
    },
    items: 1.4,
    partialVisibilityGutter: 0,
  },

  mobileP: {
    breakpoint: {
      max: 440,
      min: 390,
    },
    items: 1.5,
    // partialVisibilityGutter: 300,
  },

  mobileM: {
    breakpoint: {
      max: 520,
      min: 440,
    },
    items: 1.5,
    partialVisibilityGutter: 30,
  },
  tablet: {
    breakpoint: {
      max: 600,
      min: 520,
    },
    items: 2,
    // partialVisibilityGutter: 210,
  },
  tabletM: {
    breakpoint: {
      max: 700,
      min: 600,
    },
    items: 1.5,
    partialVisibilityGutter: 50,
  },
  tabletG: {
    breakpoint: {
      max: 900,
      min: 700,
    },
    items: 2,
    partialVisibilityGutter: 0,
  },
};

export const SliderContent = ({ data }) => {
  const navigate = useNavigate();
  return (
    <Carousel
      removeArrowOnDeviceType={[
        "tablet",
        "tablet",
        "mobileP",
        "mobileM",
        "mobile",
      ]}
      partialVisible={true}
      responsive={responsive}
      additionalTransfrom={0}
      arrows
      centerMode={false}
      className={styles.carousel}
      containerClass={styles.containerCarousel}
      dotListClass={styles.dotList}
      focusOnSelect={false}
      infinite={false}
      itemClass={styles.items}
      keyBoardControl
      minimumTouchDrag={80}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      sliderClass={styles.slider}
      slidesToSlide={1}
      swipeable
      draggable={false}
    >
      {data.map((dat, key) => (
        <div
          key={key}
          className={styles.content}
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
