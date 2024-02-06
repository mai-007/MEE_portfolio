'use client'
import Image from "next/legacy/image";
import Link from 'next/link';

// swiper
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import styles from "./MainSlider.module.scss";


export default function MainSlider({ posts }) {

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
        {posts.map(({ title, slug, eyecatch, index }) => (
          <SwiperSlide key={index}>
              <Link href={`/blog/${slug}`}>
                <Image
                  src={eyecatch.url}
                  width={1920}
                  height={1038}
                  alt={slug}
                  sizes="(min-width: 1024px) 100vw, 60vw"
                />
                <h2 className={styles.swiperTitle}>{title}</h2>
              </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}