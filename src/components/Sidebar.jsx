import styles from './Sidebar.module.css'
import img from '../assets/rect.svg'
import {PencilLine} from 'phosphor-react'

export function Sidebar() {
    return(
        <aside className={styles.sidebar}>
            <img 
                src={img} 
                className={styles.cover}
            />

            <div className = {styles.profile}>
                <img className= {styles.avatar} src="https://avatars.githubusercontent.com/u/36471319?v=4" />
                <strong>Jaqueline C.</strong>
                <span>Web developer</span>
            </div>
            <footer>
                <a href="#">
                    <PencilLine />
                    Editar seu perfil
                </a>
            </footer>
            {console.log('oioioioi')}
        </aside>
    )
}