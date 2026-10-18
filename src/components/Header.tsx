
import { NavLink } from 'react-router'
import { useLikes } from '../context/LikesContext'
import logo from '../assets/logo.svg'

function Header() {
  const { likes } = useLikes()

  return (
    <header className="site-header">
      <div className="header-brand">
        <img src={logo} alt="" width={32} height={32} />
        <h1>My Profile</h1>
      </div>

      <nav className="header-nav" aria-label="Main navigation">
        <NavLink
          to="/"
          end
          className={({ isActive }) => isActive ? 'active' : ''}
        >
          Home
        </NavLink>

        <NavLink
          to="/skills"
          className={({ isActive }) => isActive ? 'active' : ''}
        >
          Skills
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) => isActive ? 'active' : ''}
        >
          Contact
        </NavLink>

        <NavLink
          to="/register"
          className={({ isActive }) => isActive ? 'active' : ''}
        >
          Register
        </NavLink>
      </nav>

      <p className="header-likes">Likes: {likes}</p>
    </header>
  )
}

export default Header
