import { useRef, useEffect, useState } from 'react'
import './App.css'
import Container from './components/Container'

function App() {

  const [open, setOpen] = useState(false);
  let menuRef = useRef();
  
  useEffect(() => {
    let handle = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false)
      }
    };

    document.addEventListener("mousedown", handle)

    return () => {
      document.removeEventListener('mousedown', handle);
    };

  });


  return (
    <>
      <Container className={'max-w-headerContainer py-10 '}>

      <div ref={menuRef}>
          <button className='py-3 px-7 bg-red-500 text-white rounded-sm' onClick={() => {setOpen(!open)}}>Click</button>
        

        <div className={`bg-teal-500 ${open? 'block' : 'hidden'}`}>
         <ul>
          <li className='hover:text-red-500'><a href="#">Home</a></li>
          <li>About</li>
          <li>Service</li>
          <li>Contact</li>
         </ul>
        </div>
      </div>

      </Container>
    </>
  )
}

export default App


