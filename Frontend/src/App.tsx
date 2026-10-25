import { useState } from 'react'
import laRepublica from './assets/la-republica.jpg'
import './App.css'
import Submit from './components/Submit';
import MyTasks from './components/MyTasks';
import { barcelonaTask } from './helpers/funciones';
import type { spainObj } from './helpers/types';

function App() {
   // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [tasks, setTasks] = useState<spainObj>(barcelonaTask);
  const [count, setCount] = useState(0) ; 

 
  function addTask(text: string) {
    setTasks((previous: spainObj) => ({
      ...previous,
      beforeGo: [...(previous.beforeGo ?? []), text],
    }));
  }

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={laRepublica} className="framework" alt="La Republica logo" />
        </div>
        <div>
          <h1>Espana Mission</h1>
          <p>
            Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>
      <section 
      id="FormSubmit">
          <Submit onAddTask={addTask}/>
      </section>
     { // tasks={tasks} este props es para pasarle el objeto barcelonaTask a MyTasks, que es un componente que recibe un objeto de tipo spainObj y lo renderiza en una lista.
      // en este caso, el objeto barcelonaTask es un objeto que contiene tres propiedades: beforeGo, arriving y alicante, que son arrays de strings. 
      // MyTasks recibe este objeto y lo renderiza en una lista de tareas.
      }
      <MyTasks 
      tasks={tasks}
       />

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            {/* <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li> */}
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
