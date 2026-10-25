import Card from './ui/Card'
import avatar from '../assets/avatar.jpg'
import LikeButton from './LikeButton'
import SkillBadge from './SkillBadge'

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
    <Card>
      <img
        className="avatar-img"
        src={avatar}
        alt="Profile"
      />

      <h2>{name}</h2>

      <p>{description}</p>

      <div className="skills">
        <SkillBadge skill="React" />
        <SkillBadge skill="TypeScript" />
        <SkillBadge skill="CSS" />
      </div>

      <div className="links">
        {links.map((link) => (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.label}
          </a>
        ))}
      </div>

      <LikeButton />
    </Card>
  )
}

export default ProfileCard