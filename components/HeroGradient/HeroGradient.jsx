import styles from './heroGradient.module.scss'
import Image from 'next/legacy/image'
import cube from 'images/cube.jpg'

export default function HeroGradient({ title, subtitle, top = false }) {
  return (
    <div className={styles.bgContainer}>
      <div className={styles.text}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
    </div>
  )
}
