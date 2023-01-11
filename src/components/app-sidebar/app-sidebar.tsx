import { NavLink } from 'react-router-dom'
import { ReactComponent as IconRunning } from '~/assets/icon-running.svg'
import { ReactComponent as IconSwimming } from '~/assets/icon-swimming.svg'
import { ReactComponent as IconBiking } from '~/assets/icon-biking.svg'
import { ReactComponent as IconDumbbell } from '~/assets/icon-dumbbell.svg'
import styles from '~/components/app-sidebar/app-sidebar.module.scss'

type RouteProps = { to: string; icon: React.FC<JSX.IntrinsicElements['svg']> }

const routes: RouteProps[] = [
  { to: 'course', icon: IconRunning },
  { to: 'natation', icon: IconSwimming },
  { to: 'cyclisme', icon: IconBiking },
  { to: 'musculation', icon: IconDumbbell }
]

const currentYear = new Date().getFullYear()

export const AppSidebar: React.FC = () => (
  <aside className={styles.appSidebar}>
    <nav className={styles.nav}>
      {routes.map(route => (
        <NavLink key={route.to} to={route.to} end className={styles.navLink}>
          <route.icon className={styles.navLinkIcon} />
          <span className={styles.navLinkText}>Redirection vers {route.to}</span>
        </NavLink>
      ))}
    </nav>
    <footer className={styles.footer}>&copy; {currentYear} SportSee. Tous droits réservés.</footer>
  </aside>
)
