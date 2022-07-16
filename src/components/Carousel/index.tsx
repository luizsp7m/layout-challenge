import styles from "./styles.module.scss";

import { useEffect, useState } from "react";
import { GrPrevious, GrNext } from "react-icons/gr";

const IMAGES = ["/assets/carousel-image-01.jpg", "/assets/carousel-image-02.jpg", "/assets/carousel-image-03.jpg"];

export function Carousel() {
  const [imageIndex, setImageIndex] = useState(0);
  const [opacity, setOpacity] = useState(false);

  function previousImage() {
    if (imageIndex - 1 < 0)
      setImageIndex(IMAGES.length - 1);
    else
      setImageIndex(imageIndex - 1);
  }

  function nextImage() {
    if (imageIndex + 1 >= IMAGES.length)
      setImageIndex(0);
    else
      setImageIndex(imageIndex + 1);
  }

  useEffect(() => {
    setOpacity(true);

    setTimeout(() => {
      setOpacity(false);
    }, 500);
  }, [imageIndex]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.carousel}>
        <button className={styles.previousButton} type="button" onClick={previousImage}>
          <GrPrevious size={20} />
        </button>

        <button className={styles.nextButton} type="button" onClick={nextImage}>
          <GrNext size={20} />
        </button>

        <img className={`${opacity && styles.selected}`} src={IMAGES[imageIndex]} alt="Carousel" />
      </div>
    </div>
  );
}