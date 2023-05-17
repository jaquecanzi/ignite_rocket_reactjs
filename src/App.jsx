//import { useState } from 'react'
import {Post} from "./components/Post"
import { Header } from './components/Header';
import { Sidebar } from "./components/Sidebar";

import './styles.css'
import styles from './App.module.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
   <div>
      <Header />
      <div className={styles.wrapper}>
        <aside>
          <Sidebar></Sidebar>
        </aside>
          <main>
            <Post />
          </main>
        
      </div>
   </div>
  )
}


export default App
