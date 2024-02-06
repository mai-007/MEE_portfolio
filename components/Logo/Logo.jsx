import Link from 'next/link'
import styles from './logo.module.scss'

export default function Logo({ boxOn = false }) {
  return (
    <Link href="/">
      <h1 className={boxOn ? styles.box : styles.basic}>
      MEE.works
    </h1>
    </Link>
  )
}
