import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import styles from './layout.module.scss'
import Image from 'next/legacy/image'
import bgImage from 'images/blob-scene-haikei.svg'

export default function Layout({ children }) {
  return (
    <>
      <div className={styles.blur}></div>
      <div className={styles.bgImage}>
        <Image 
          src={bgImage} 
          layout={`fill`} 
          objectFit={`cover`}
        />
      </div>
      <Header />
      <main >{children}</main>
      <Footer />
    </>
  )
}
