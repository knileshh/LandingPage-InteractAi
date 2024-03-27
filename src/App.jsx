import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { SiInteractiondesignfoundation } from "react-icons/si";
import ThemeController from './components/ThemeController';
import Timeline from './components/Timeline';
import FooterWithLogo from './components/FooterWithLogo';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    {/* nav bar start */}
      <div className="navbar bg-base-100 absolute"> 
      {/* added absolute above */}
  <div className="flex-1">
    <a className="btn btn-ghost text-xl"><SiInteractiondesignfoundation />Interact Ai</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a>Login</a></li>
      <li><ThemeController/></li>

      <li>
        <details>
          <summary>
            Parent
          </summary>
          <ul className="p-2 bg-base-100 rounded-t-none">
            <li><a>Link 1</a></li>
            <li><a>Link 2</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
</div>

{/* navbar end */}


{/* hero section start */}

    

<div className="hero min-h-screen" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1711390811075-496d7c4ad504?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello There 👋</h1>
      <p className="mb-5">Welcome to the landing page of Interact Ai. To Let's get together on this journey.</p>
      <button className="btn btn-primary ">Start Asking</button>
    </div>
  </div>
</div>

{/* hero section end */}

<Timeline/>
<FooterWithLogo/>
</>
  )
}

export default App
