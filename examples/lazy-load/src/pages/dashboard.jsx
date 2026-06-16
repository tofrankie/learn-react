import { Link } from 'react-router-dom'

export default function Dashboard() {
  console.log('load dashboard')

  return (
    <main className="route-page dashboard-page">
      <p className="route-label">Dashboard</p>
      <h1>管理后台</h1>
      <Link className="route-back" to="/">
        返回首页
      </Link>
    </main>
  )
}
