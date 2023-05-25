//import { useState } from 'react'
import {Post} from "./components/Post"
import { Header } from './components/Header';
import { Sidebar } from "./components/Sidebar";

import './styles.css'
import styles from './App.module.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/36471319?v=4',
      name: 'Jaqueline Copello',
      role: 'Poor girl looking your first chance'
    },
    content : [
      {type:'paragraph', content: 'Fala aí!'},
      {type:'paragraph', content: 'The word , for example a shortened version of the word, meaning pain. This makes the current dummy text impossible to translate into English.'},
      {type:'link', content: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2022-05-03 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/36471319?v=4',
      name: 'Joana Careca',
      role: 'CEO Google'
    },
    content : [
      {type:'paragraph', content: 'Fala aí!'},
      {type:'paragraph', content: 'Garantia de emprego: se não conseguir uma vaga no mercado de trabalho em até 6 meses após concluir o curso, devolvemos o seu dinheiro'},
      {type:'paragraph', content: 'Fala aí!'}
    ],
    publishedAt: new Date('2023-05-03 21:00:00')
  }
]

export default function App() {
  //const [count, setCount] = useState(0)

  return (
   <div>
      <Header />
      <div className={styles.wrapper}>
        <aside>
          <Sidebar></Sidebar>
        </aside>
          <main>
          {posts.map(post => {
            return (
              <Post 
                key = {post.id}
                id = {post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
          </main>
        
      </div>
   </div>
  )
}


