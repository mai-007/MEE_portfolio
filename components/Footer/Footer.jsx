import Container from '@/components/Container/Container'
import Logo from '../Logo/Logo'
// import Social from '@/components/Social/Social'
import styles from './footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.wrapper}>
      <Container>
        <div className={styles.flexContainer}>
          <Logo />
          {/* <Social/> */}
        </div>
      </Container>
    </footer>
  )
}
