'use client'

import styles from './posts.module.scss'
import Link from 'next/link'
import { motion } from 'framer-motion';
import Image from 'next/legacy/image'
import Button from '@/components/Button/Button'
import { BiChevronRight } from "react-icons/bi"


const container = {
  hidden: {
    opacity: 0,
    y: 200, // offset
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0,
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: [50, 0],
    transition: {
      duration: .5,
      ease: 'easeInOut'
    },
  },
};

export default function Posts({ posts }) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      className={styles.gridContainer}
      >
      {posts.map(({ title, slug, eyecatch, url, categories }) => (
        <motion.article
          variants={item}
          className={styles.post} key={slug}
          >
        {url ? (
          <Link 
            href={url}
            rel="noopener noreferrer" target="_blank"
          > 
            <figure>
            <Image
              src={eyecatch.url}
              alt=""
              layout="fill"
              objectFit="cover"
              sizes="(min-width: 1152px) 576px, 50vw"
              placeholder="blur"
              blurDataURL={eyecatch.blurDataURL}
            />
            </figure>
          </Link>
        ):(
          <figure>
          <Image
            src={eyecatch.url}
            alt=""
            layout="fill"
            objectFit="cover"
            sizes="(min-width: 1152px) 576px, 50vw"
            placeholder="blur"
            blurDataURL={eyecatch.blurDataURL}
          />
          </figure>
        )}
          <ul className={styles.list}>
          {categories.map(({ name, slug }) => (
            <li key={slug} className={styles.listItem}>
              <Link href={`/blog/category/${slug}`}>
                {name}
              </Link>
            </li>
            ))}
          </ul>
          <h2 className={styles.postTitle}>{title}</h2>
            <div className={styles.flex}>
              <Link 
                href={`/blog/${slug}`}
                className={styles.siteUrl}
              > 
                &nbsp;詳細ページへ
                <BiChevronRight/>
              </Link>
              {url && (
              <Button url={url}/>
              )}
            </div>
        </motion.article>
      ))}
    </motion.div>
  )
}