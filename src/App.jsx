//import { useState } from 'react'
import {Post} from "./Post"
import './styles.css'
import { Header } from './components/Header';


function App() {
  //const [count, setCount] = useState(0)

  return (
   <div>
    <header>
        <Header></Header>
      </header>
      <Post
        author = 'Jaqueline'
        content = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia sit quae, aperiam esse laboriosam sequi tempora tenetur corrupti, accusantium nisi atque sunt asperiores! Earum temporibus animi ab praesentium inventore mollitia!'
      />
      <Post
        author = 'Rafael'
        content = 'Lalalalalala'
      />
   </div>
  )
}


export default App
