import { useState } from 'react'
import '../App.css'
import Header from '../components/Header'
import CircularText from '../components/CircularText';
import DecayCard from '../components/DecayCard';
import MainSection from '../components/sections/MainSection';
import SummarySection from '../components/sections/SummarySection';
import ScrollVelocity from '../components/ScrollVelocity';
import CircularGallery from '../components/CircularGallery'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Header />

      <MainSection />

      <SummarySection />

      <div style={{ backgroundColor: '#000', maxWidth: '100%', height: '20vh', alignContent: 'center', color: '#fff', marginBottom: '400px' }}>
        <ScrollVelocity
          texts={['Full-stack developer ------ turning ideas into apps , ']}
          velocity={100}
          className="custom-scroll-text"
        />
      </div>

      <div style={{ height: '600px', position: 'relative', maxWidth: '100%', textAlign: 'center' }}>
        <h1 style={{ fontFamily: "NeueMagnat", fontSize: '60px' }}>WORK TOGETHER</h1>
        <CircularGallery bend={3} textColor="#000" borderRadius={0.05} />
      </div>


      <div style={{ maxWidth: '100%', height: '20vh' }}>
      </div>

    </>
  )
}

export default App
