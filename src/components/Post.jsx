import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src= "https://avatars.githubusercontent.com/u/36471319?v=4"/>
                    <div className={styles.authorInfo}>
                        <strong>Jaqueline C.</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time dateTime='11-05-2023'>Publicado há 1 hora</time>
            </header>
            <div className={styles.content}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis doloribus ea iure nemo numquam harum quisquam quaerat excepturi, saepe laboriosam amet dolore? Exercitationem ea natus tenetur vero reprehenderit aliquam molestias.
                <p><a href="#">#loremit #eren #consextur #ghgh</a></p>
            </div>
            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    placeholder='Deixe seu comentário'
                />
                <footer>
                    <button type='submit'>Comentar</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                <Comment></Comment>
                <Comment></Comment>
                <Comment></Comment>
            </div>
        </article>
    )
}