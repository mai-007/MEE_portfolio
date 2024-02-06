import styles from './pagination.module.scss'
import Link from 'next/link'
import { BiChevronRight } from "react-icons/bi"

export default function Pagination({
  prevText = '',
  prevUrl = '',
  nextText = '',
  nextUrl = '',
}) {
  return (
    <ul className={styles.flexContainer}>
      {prevText && prevUrl && (
        <li className={styles.prev}>
          <Link href={prevUrl} className={styles.iconText}>
          <BiChevronRight />
              <span>{prevText}</span>
          </Link>
        </li>
      )}
      {nextText && nextUrl && (
        <li className={styles.next}>
          <Link href={nextUrl} className={styles.iconText}>
              <span>{nextText}</span>
              <BiChevronRight />
          </Link>
        </li>
      )}
    </ul>
  );
}