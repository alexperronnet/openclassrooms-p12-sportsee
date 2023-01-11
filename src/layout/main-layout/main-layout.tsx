import { Outlet } from 'react-router-dom'
import { ReactComponent as Logo } from '~/assets/logo.svg'
import styles from '~/layout/main-layout/main-layout.module.scss'

const currentYear = new Date().getFullYear()

export const MainLayout: React.FC = () => (
  <div className={styles.mainLayout}>
    <div className={styles.container}>
      <header className={styles.header}>
        <Logo className={styles.logo} />
      </header>
      <Outlet />
      <footer className={styles.footer}>&copy; {currentYear} SportSee. Tous droits réservés.</footer>
    </div>
  </div>
)
