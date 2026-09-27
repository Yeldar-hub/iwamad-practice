import './style.css'; 
import Header from './components/Header';
import ProfileCard from './components/ProfileCard';
import Footer from './components/Footer';

function App() {
  const userLinks = [
    { id: 1, label: 'Email', url: 'mailto:e_ashimov@kbtu.kz' },
    { id: 2, label: 'GitHub', url: 'https://github.com/Yeldar-hub' }
  ];

  return (
    <div className="app-container">
      <Header />
      
      <ProfileCard 
        name="Eldar" 
        description="I am an IT Management student interested in technology and product management. I enjoy learning new technologies and working on useful projects." 
        links={userLinks} 
      />
      
      <Footer />
    </div>
  );
}

export default App;
