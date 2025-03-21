import { useState } from 'react'
import '../App.css'
import Header from '../components/Header'
import Particles from '../components/Particles.jsx';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>


      <div >
        <Particles
          particleColors={['#566573', '#566573']}
          particleCount={600}
          particleSpread={9}
          speed={0.2}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>

      <Header />

      {/* <SplashCursor /> */}


      <div class="section-center">
        <h2>Hello there!</h2>
        <div className='outline-div'>
          <span class="outline ">I'm <span className='bold'>Salman Abbas</span> </span><br />
          <span class="bold">a full-stack <span className='outline'>developer</span></span><br />
          <span class="outline">Building Scalable</span> <br />
          <span class="bold">& Efficient Web Solutions</span>

        </div>




      </div >
    </>
  )
}

export default App
