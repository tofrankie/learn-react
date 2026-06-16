import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import App from './App'

const Dashboard = lazy(() => import('./pages/dashboard'))
const Mine = lazy(() => import('./pages/mine'))

export default function AppRoutes() {
  return (
    <Suspense fallback={<div>正在努力加载...</div>}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/mine" element={<Mine />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Suspense>
  )
}
