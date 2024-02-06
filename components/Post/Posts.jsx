import styles from './posts.module.scss'
import Link from 'next/link'
import Image from 'next/legacy/image'
import Button from '@/components/Button/Button'

import { BiChevronRight } from "react-icons/bi"


export default function Posts({ posts }) {
  return (
    <div className={styles.gridContainer}>
      {posts.map(({ title, slug, eyecatch, url, categories}) => (
        <article className={styles.post} key={slug}>
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
          {/* <ul>
            {categories.map(({ name, slug }) =>(
              <li key={slug}>
                <Link href={`/blog/category/${slug}`}>
                  {name}
                </Link>
              </li>
            ))}
          </ul> */}
          <h2 className={styles.postTitle}>{title}</h2>
            <div className={styles.flex}>
              <Link 
                href={`/blog/${slug}`}
                className={styles.siteUrl}
              > 
                &nbsp;詳細ページへ
                <BiChevronRight/>
              </Link>
              <Button url={url}/>
            </div>
        </article>
      ))}
    </div>
  )
}