'use client'

import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import { BsGithub } from "react-icons/bs";
import Link from "next/link"
import styles from "./hero.module.scss";
import { motion, useAnimate, stagger } from "framer-motion"

//motion
const textContainerVariants = {
  hidden: { 
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};
const charVariants = {
  hidden: { 
    opacity: 0,
    y: 20,
    x: 20,
  },
  visible: { 
    opacity: 1,
    y: 0,
    x: 0,
    transition: { duration: 0.5 }
  },
};

export default function Hero() {

  const mainText = () => {
    return "心動かすデザインと保守性・再利用性の高いコードを"
    }
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
            <div>
          <motion.h2
            className={styles.swiperTitle}
            variants={textContainerVariants}
            initial="hidden"
            animate="visible"
          >
            {mainText().split('').map((char, index) => (
              <motion.span
                key={index}
                variants={charVariants}
              >
                {char}
              </motion.span>
            ))}
          </motion.h2>
            <div className={styles.text}>
              <p>
              このサイトはJamstackでHeadressな高速サイトです。
              </p>
              <p>
              <Link
                className="link"
                href="https://nextjs.org/"
                rel="noopener noreferrer" target="_blank"
              >
                Next.js
                </Link>
                で
                <Link
                  className="link"
                  href="https://nextjs.org/docs/app"
                  rel="noopener noreferrer" target="_blank"
                >
                  AppRouter
                </Link>
                  を使用し
                <Link
                  className="link"
                  href="https://microcms.io/"
                  rel="noopener noreferrer" target="_blank"
                >
                microCMS
                </Link>
                にてAPIで過去制作サイトを配信しています。
              </p>
            </div>
            <Link
              className={styles.link}
              href="https://github.com/mai-007/MEE_portfolio"
              rel="noopener noreferrer" target="_blank"
            >
            <BsGithub />
            &nbsp;ソースコードはこちら
            </Link>
            </div>
        </SwiperSlide>
      </Swiper>
  );
}