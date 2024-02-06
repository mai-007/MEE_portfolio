import { BiFolderOpen } from "react-icons/bi";
import Link from 'next/link'

import styles from './post-categories.module.scss'


export default function PostCategories({ categories }){
  return(
    <div className={styles.flexContainer}>
      <h3 className={styles.title}>
        <BiFolderOpen/>
        <span className={styles.des}>Part</span>
      </h3>
      <ul className={styles.list}>
        {categories.map(({ name, slug }) =>(
          <li key={slug} className={styles.listItem}>
            <Link href={`/blog/category/${slug}`}>
              {name}
            </Link>
          </li>
    ))}
      </ul>
    </div>
  )
}