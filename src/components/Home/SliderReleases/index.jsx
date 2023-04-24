import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./styles.module.css";
import { Loader } from "../../Loader";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { CardCoversBigs } from "../../Cards/coversBigs";

const responsive = {
  desktopM: {
    breakpoint: {
      max: 2100,
      min: 1880,
    },
    items: 3.5,
    partialVisibilityGutter: 40,
  },
  desktop: {
    breakpoint: {
      max: 1880,
      min: 1600,
    },
    items: 3,
    partialVisibilityGutter: 40,
  },
  mobile: {
    breakpoint: {
      max: 480,
      min: 0,
    },
    items: 1,
    partialVisibilityGutter: 0,
  },
  tablet: {
    breakpoint: {
      max: 980,
      min: 480,
    },
    items: 1.5,
    partialVisibilityGutter: 0,
  },
  tabletM: {
    breakpoint: {
      max: 1300,
      min: 980,
    },
    items: 2,
    // partialVisibilityGutter: 30,
  },
  tabletG: {
    breakpoint: {
      max: 1600,
      min: 1300,
    },
    items: 2.5,
    // partialVisibilityGutter: 30,
  },
};

export const SliderReleases = ({ data }) => {
  const navigate = useNavigate();

  return (
    <Fragment>
      <Carousel
        responsive={responsive}
        additionalTransfrom={0}
        arrows
        draggable={false}
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
      >
        {data.length === undefined ? (
          <Loader />
        ) : (
          data?.map((dat, key) => (
            <div
              key={key}
              onClick={() => navigate(`/movie/${dat.id}`)}
              className={styles.relative}
            >
              <CardCoversBigs data={dat} />
            </div>
          ))
        )}
      </Carousel>
    </Fragment>
  );
};
