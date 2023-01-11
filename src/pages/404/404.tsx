import { Link } from 'react-router-dom'
import styles from '~/pages/404/404.module.scss'

export const NotFound: React.FC = () => (
  <div className={styles.notFound}>
    <div className={styles.infos}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.text}>La page que vous recherchez n’existe pas ou a été déplacée...</p>
    </div>
    <Link to="/" className={styles.link}>
      Connectez-vous
    </Link>
  </div>
)
