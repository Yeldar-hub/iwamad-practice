import avatar from '../assets/avatar.jpg'
import LikeButton from './LikeButton'

type Link = {
  id: number
  label: string
  url: string
}

type ProfileCardProps = {
  name: string
  description: string
  links: Link[]
}

function ProfileCard({ name, description, links }: ProfileCardProps) {
  return (
    <div className="card">
      <img
        className="avatar-img"
        src={avatar}
        alt="Profile"
      />

      <h2>{name}</h2>

      <p>{description}</p>

      <div className="links">
        {links.map((link) => (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
          >
            {link.label}
          </a>
        ))}
      </div>

      <LikeButton />
    </div>
  )
}

export default ProfileCard
