import { Outlet } from 'react-router-dom'
import styles from '~/layout/main-layout/main-layout.module.scss'

export const MainLayout = (): JSX.Element => {
  return (
    <div className={styles.mainLayout}>
      <Outlet />
    </div>
  )
}
