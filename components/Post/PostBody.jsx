import styles from './postBody.module.scss'

export default function PostBody({ children }) {
  return (
    <div className={styles.stack}>
      {children}
    </div>
  )
}
