//import { useState } from 'react'
import {Post} from "./Post"
import './styles.css'
import styles from './App.module.css'
import { Header } from './components/Header';
import { Sidebar } from "./components/Sidebar";


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
            <Post />
          </main>
        
      </div>
   </div>
  )
}


export default App
