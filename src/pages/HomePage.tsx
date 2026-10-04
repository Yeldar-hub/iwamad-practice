import ProfileCard from '../components/ProfileCard'

function HomePage() {
  const userLinks = [
    { id: 1, label: 'Email', url: 'mailto:e_ashimov@kbtu.kz' },
    { id: 2, label: 'GitHub', url: 'https://github.com/Yeldar-hub' }
  ]

  return (
    <main>
      <ProfileCard
        name="Eldar"
        description="I am an IT Management student interested in technology and product management. I enjoy learning new technologies and working on useful projects."
        links={userLinks}
      />
    </main>
  )
}

export default HomePage