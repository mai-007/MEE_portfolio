'use client'
import Image from "next/legacy/image";
import Link from 'next/link';

// swiper
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import styles from "./hero.module.scss";

const imagesData = [
  '/images/xd.svg',
  '/images/figma_circle.svg',
  '/images/photoshop.svg',
  '/images/illustrator.svg',
];

export default function Hero() {

  return (
    <div className={`${styles.wrapper}`}>
      <Swiper
      modules={[Navigation, Pagination, Autoplay,EffectFade]}
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoHeight={false}
        slidesPerView={1}
        centeredSlides={true}
        loop={true}
        loopAdditionalSlides={1}
        speed={2000}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
          waitForTransition: false,
        }}
        followFinger={false}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        onSlideChange={() => console.log('slide change')}
        className={styles.slideWrapper}
      >
          <SwiperSlide>
          {imagesData.map((image, index) => (
            <div key={index}>
            <Image
              src={image}
                alt=""
                layout="fill"
                objectFit="cover"
                sizes="(min-width: 1152px) 576px, 50vw"
            />
            </div>
            ))}
            <h2 className={styles.swiperTitle}>lottieAnime</h2>
          </SwiperSlide>
      </Swiper>
    </div>
  );
}