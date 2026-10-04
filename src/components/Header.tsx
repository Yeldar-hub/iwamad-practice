import { NavLink } from 'react-router'
import { useLikes } from '../context/LikesContext'

function Header() {
  const { likes } = useLikes()

  return (
    <header>
      <h1>My Profile</h1>

      <nav>
        <NavLink
          to="/"
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
      </nav>

      <p>Likes: {likes}</p>
    </header>
  )
}

export default Header