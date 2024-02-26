'use client'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import TrailingCircles from '@/components/TrailingCircles/TrailingCircles' 
import styles from './layout.module.scss'

export default function Layout({ children }) {
  return (
    <>
      <div className={styles.blur}>
        <TrailingCircles/>
      </div>
      <Header />
      <main >{children}</main>
      <Footer />
    </>
  )
}
