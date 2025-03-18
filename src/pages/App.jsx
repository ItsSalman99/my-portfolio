import { useState } from 'react'
import '../App.css'
import Header from '../components/Header'
import GlitchText from '../components/GlitchText.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />

      <div class="section-center ">
        <h1 className='bg-white'>Hello, I'm Salman Abbas</h1>
        <GlitchText
          speed={1}
          enableShadows={true}
          enableOnHover={true}
          className='custom-class'
        >
          Full-Stack Developer
        </GlitchText>
      </div>
    </>
  )
}

export default App
