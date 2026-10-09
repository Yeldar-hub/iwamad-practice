import ProfileCard from '../components/ProfileCard'

function HomePage() {
  const links = [
    {
      id: 1,
      label: 'Email',
      url: 'mailto:e_ashimov@kbtu.kz'
    },
    {
      id: 2,
      label: 'GitHub',
      url: 'https://github.com/Yeldar-hub'
    }
  ]

  return (
    <main>
      <ProfileCard
        name="Eldar"
        description="I am an IT Management student interested in technology and product management."
        links={links}
      />
    </main>
  )
}

export default HomePage