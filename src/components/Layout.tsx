import { Outlet } from 'react-router'
import Header from './Header'
import Footer from './Footer'

function Layout() {
  return (
    <div className="app-container">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout