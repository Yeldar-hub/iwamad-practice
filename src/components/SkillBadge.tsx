import Tag from './ui/Tag'

type SkillBadgeProps = {
  skill: string
}

function SkillBadge({ skill }: SkillBadgeProps) {
  return <Tag label={skill} />
}

export default SkillBadge