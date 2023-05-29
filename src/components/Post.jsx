import Avatar from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'
import React from 'react'
import { useState } from 'react'

import { format,formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export function Post({ author, publishedAt, content }) {
    const [comments, setComments] = useState([
        'Post legal!'
    ])

    const publishedDateFormatted = format(publishedAt,
        "d 'de' LLLL 'às' HH:mm'h'", { locale: ptBR })
    const publishedDateeRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    function handleCreateNewComment() {
        event.preventDefault()
        console.log(event.target.comment.value);
        const newCommentText = event.target.comment.value
        setComments([...comments, newCommentText])
        
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateeRelativeToNow}
                </time>
            </header>
            <div className={styles.content}>
                {content.map((line, index) => {
                    if (line.type === 'paragraph') {
                        return (
                            <React.Fragment key={index}>
                                <p>{line.content}</p>
                            </React.Fragment>
                        );
                    } else if (line.type === 'link') {
                        return (
                            <p key={index}>
                                <a href="#">{line.content}</a>
                            </p>
                        );
                    }
                })}

                <p>
                    <a href="#">#loremit #eren #consextur #ghgh</a>
                </p>
            </div>
            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea name="comment" placeholder="Deixe seu comentário" />
                <footer>
                    <button type="submit">Comentar</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                {
                    comments.map((comment, index )=> {
                        return <Comment key = {index} content={comment}/>
                    })
                }
            </div>
        </article>
    );
}
