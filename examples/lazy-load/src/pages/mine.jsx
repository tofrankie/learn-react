import { Link } from 'react-router-dom'

export default function Mine() {
  console.log('load mine')

  return (
    <main className="route-page mine-page">
      <p className="route-label">Mine</p>
      <h1>我的页面</h1>
      <Link className="route-back" to="/">
        返回首页
      </Link>
    </main>
  )
}
