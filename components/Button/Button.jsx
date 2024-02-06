import Link from 'next/link'
import { BiLink } from "react-icons/bi"
import styles from './button.module.scss'


export default function Button({ url }) {
  return(
    <Link 
    href={url} 
    className={styles.siteLink}
    rel="noopener noreferrer" target="_blank"
    > 
      <BiLink/>&nbsp;view this website
    </Link>
  )
}


