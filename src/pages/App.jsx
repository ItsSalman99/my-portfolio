import { useState } from 'react'
import '../App.css'
import Header from '../components/Header'
import CircularText from '../components/CircularText';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Header />

      <div class="">
        <div className="row">
          <div className="col-8">
            <h1 style={{ fontFamily: 'NeueMagnat', color: '#353746' }}>Graphic Design x Coding = Creative Dev</h1>

            <div className='outline-div'>
              <span class="bold">A Full Stack Developer is your go-to expert for both front-end and back-end development.</span>
              {/* <span class="bold">a Full Stack Developer crafts seamless digital experiences.</span> <br /> */}
            </div>
            <button className='button-style'>Lets Talk</button>
          </div>
          <div className="col-4">
            <CircularText
              text="DESIGN*TO*DEVELOPMENT*"
              onHover="goBonkers"
              spinDuration={40}
              className="text-dark"
            />

          </div>
        </div>

      </div >

    </>
  )
}

export default App
