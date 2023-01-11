import { Link } from 'react-router-dom'
import styles from '~/pages/app-error/app-error.module.scss'

type AppErrorProps = {
  status: '404' | 'na'
}

const titles = {
  '404': '404',
  na: 'Bientôt'
}

const messages = {
  '404': 'La page que vous recherchez n’existe pas ou a été déplacée...',
  na: 'Cette page n’est pas encore disponible...'
}

export const AppError: React.FC<AppErrorProps> = ({ status }) => (
  <div className={styles.appError}>
    <div className={styles.infos}>
      <h1 className={styles.title}>{titles[status]}</h1>
      <p className={styles.text}>{messages[status]}</p>
    </div>
    <Link to="/app" className={styles.link}>
      Retour au tableau de bord
    </Link>
  </div>
)
