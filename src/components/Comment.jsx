import { ThumbsUp, TrashSimple } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment(){
    return (
        <div className={styles.comment}>
            <img className={styles.avatar} src= "https://avatars.githubusercontent.com/u/36471319?v=4"/>
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Jaqueline Copello</strong>
                            <time title='11 de maio as 08:13' dateTime='2023-05-11 08:158'>Cerca de 1h atrás</time>
                        </div>
                            <button title='Deletar comentário'>
                                <TrashSimple size={24}></TrashSimple>
                            </button>
                    </header>
                        <p>Muito bom!!! Parabéns</p>
                    
                    <footer>
                        <button>
                            <ThumbsUp></ThumbsUp>
                            Aplaudir <span>20</span>
                        </button>
                    </footer>
                </div>
            </div>

        </div>
    )
}