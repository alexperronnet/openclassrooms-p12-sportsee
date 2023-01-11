import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MainLayout, AppLayout } from '~/layout'
import { Login, NotFound, AppDashboard, AppError } from '~/pages'

type naRoutesProps = string[]

const naRoutes: naRoutesProps = ['profil', 'reglage', 'communaute', 'course', 'natation', 'cyclisme', 'musculation']

export const Router: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="app" element={<AppLayout />}>
        <Route index element={<AppDashboard />} />
        {naRoutes.map(route => (
          <Route key={route} path={route} element={<AppError status="na" />} />
        ))}
        <Route path="*" element={<AppError status="404" />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
