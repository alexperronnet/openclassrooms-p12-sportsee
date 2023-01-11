import { Link, NavLink } from 'react-router-dom'
import { ReactComponent as Logo } from '~/assets/logo.svg'
import { ReactComponent as IconLogout } from '~/assets/icon-logout.svg'
import styles from '~/components/app-header/app-header.module.scss'

type RouteProps = { to: string; label: string }

const routes: RouteProps[] = [
  { to: '', label: 'Accueil' },
  { to: 'profil', label: 'Profil' },
  { to: 'reglage', label: 'Réglage' },
  { to: 'communaute', label: 'Communauté' }
]

export const AppHeader: React.FC = () => (
  <header className={styles.appHeader}>
    <Link to="" className={styles.logoLink}>
      <Logo className={styles.logo} />
      <span className={styles.logoLinkText}>Sportsee tableau de bord</span>
    </Link>
    <nav className={styles.nav}>
      {routes.map(route => (
        <NavLink key={route.to} to={route.to} end className={styles.navLink}>
          {route.label}
        </NavLink>
      ))}
      <Link to="/" className={styles.logout}>
        <IconLogout className={styles.logoutIcon} />
        <span className={styles.logoutText}>Déconnexion</span>
      </Link>
    </nav>
  </header>
)
