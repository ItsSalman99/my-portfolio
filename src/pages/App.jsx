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
          particleColors={['#000', '#000']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      <Header />

      {/* <SplashCursor /> */}


      <div class="section-center m-4 p-4">
        <div className='outline-div'>
          <span class="outline ">Hey, I am <span className='bold'>Salman</span> </span><br />
          <span class="bold">Full-Stack <span className='outline'>Developer</span></span><br />
          <span class="outline">Building Scalable</span> <br />
          <span class="bold">& Efficient Web Solutions</span>

        </div>




      </div >
    </>
  )
}

export default App
