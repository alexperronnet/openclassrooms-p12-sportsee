import { Outlet } from 'react-router-dom'
import { AppHeader, AppSidebar } from '~/components'
import styles from '~/layout/app-layout/app-layout.module.scss'

export const AppLayout = (): JSX.Element => {
  return (
    <div className={styles.appLayout}>
      <AppHeader />
      <AppSidebar />
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  )
}
