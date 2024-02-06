import Container from '@/components/Container/Container'
import Logo from '@/components/Logo/Logo'
import Nav from '@/components/Nav/Nav'
import styles from './header.module.scss'

export default function Header() {
  return (
    <header className={styles.header}>
      <Container large>
        <div className={styles.flexContainer}>
          <Logo boxOn />
          <Nav />
        </div>
      </Container>
    </header>
  )
}
