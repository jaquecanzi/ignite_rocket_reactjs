import { ThumbsUp, TrashSimple } from 'phosphor-react'
import styles from './Comment.module.css'
import Avatar from './Avatar'

export function Comment(props){
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src= "https://avatars.githubusercontent.com/u/36471319?v=4"/>
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
                        {props.content}
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