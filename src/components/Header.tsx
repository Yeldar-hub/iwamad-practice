import { NavLink } from 'react-router'

function Header() {
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
    </header>
  )
}

export default Header