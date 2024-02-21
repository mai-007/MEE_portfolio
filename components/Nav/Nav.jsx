'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import {Link as Scroll} from "react-scroll"
import styles from './nav.module.scss'

export default function Nav() {

  const pathname = usePathname();

  const [ navIsOpen, setNavIsOption ] = useState(false)
  
  const toggleNav = () => {
    setNavIsOption((prev) => !prev)
  }

  const closeNav = () => {
    setNavIsOption(false)
  }

  return (
    <nav className={navIsOpen ? styles.open : styles.close}>
      {navIsOpen && (
        <style jsx global>{`
          @media (max-width: 767px) {
            body {
              overflow: hidden;
              position: fixed;
              width; 100%;
            }
          }
        `}</style>
      )}
      <button className={styles.btn} onClick={toggleNav}>
        <span className={styles.bar}></span>
        <span className="sr-only">MENU</span>
      </button>
      <ul className={styles.list}>
        <li>
          <Link href="/" onClick={closeNav}>
            Home
          </Link>
        </li>
        <li>
        {(pathname == '/')?
          <Scroll 
            link to="skillSet" 
            smooth={true}
            duration={100} 
            onClick={closeNav} 
            offset={-30}
          >
            Skills
          </Scroll>
          :
          <Link href={`/#skillSet`} 
            onClick={closeNav}
          >
            Skill
          </Link>
        }
        </li>
        <li>
          <Link href="/blog" onClick={closeNav}>
            Works
          </Link>
        </li>
      </ul>
    </nav>
  )
}
