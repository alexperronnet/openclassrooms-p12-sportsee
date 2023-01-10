import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MainLayout, AppLayout } from '~/layout'
import { Login, NotFound, AppDashboard, AppError } from '~/pages'

export const Router = (): JSX.Element => {
  const notAvailableRoutes = ['profil', 'settings', 'community', 'running', 'swimming', 'cycling', 'workout']

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/app" element={<AppLayout />}>
          <Route index element={<AppDashboard />} />
          {notAvailableRoutes.map((route, i) => (
            <Route key={i} path={route} element={<AppError />} />
          ))}
          <Route path="*" element={<AppError />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
