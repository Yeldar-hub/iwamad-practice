import { Link } from 'react-router'

function NotFoundPage() {
  return (
    <main>
      <div className="page">
        <h1>404</h1>

        <p>Page not found</p>

        <Link to="/">Back to Home</Link>
      </div>
    </main>
  )
}

export default NotFoundPage