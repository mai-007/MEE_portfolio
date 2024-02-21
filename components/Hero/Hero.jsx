'use client'
import Image from "next/legacy/image";

// swiper
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import { BsGithub } from "react-icons/bs";
import Link from "next/link"
import styles from "./hero.module.scss";

export default function Hero() {

  return (
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
          <SwiperSlide className={styles.slideItem}>
            <span className={styles.swiperSubTitle}>MISSION</span>
            <h2 className={styles.swiperTitle}>心動かすデザインと保守性・再利用性の高いコードを</h2>
            <div className={styles.text}>
              <p>
              このサイトはJamstackでHeadressな高速サイトです。
              </p>
              <p>Next.jsでAppRouterを使用しmicroCMSにての過去制作サイトの情報を配信しています。
              </p>
            </div>
          <Link
            className={styles.link}
            href="https://github.com/mai-007/2023_portfplio"
            rel="noopener noreferrer" target="_blank"
            >
            <BsGithub />
            &nbsp;ソースコードはこちら
          </Link>
        </SwiperSlide>
      </Swiper>
  );
}