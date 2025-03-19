import { useState } from 'react'
import '../App.css'
import Header from '../components/Header'
import MetaBalls from '../components/MetaBalls';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />

      {/* <SplashCursor /> */}


      <div class="section-center m-4 p-4">
        <div className="row">
          <div className="col-8">
            <div className='outline-div'>
              <span class="outline">Hey, I am <span className='bold'>Salman</span> </span><br />
              <span class="bold">Full-Stack <span className='outline'>Developer</span></span><br />
              <span class="outline">Building Scalable</span> <br />
              <span class="bold">& Efficient Web Solutions</span>

            </div>
          </div>
          <div className="col-4">
            <MetaBalls
              color="#ffffff"
              cursorBallColor="#ffffff"
              cursorBallSize={2}
              ballCount={22}
              animationSize={25}
              enableMouseInteraction={true}
              enableTransparency={true}
              hoverSmoothness={0.05}
              clumpFactor={1}
              speed={0.3}
            />
          </div>
        </div>




      </div>
    </>
  )
}

export default App
