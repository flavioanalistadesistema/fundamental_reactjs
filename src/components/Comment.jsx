import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css'

export function Comment() {
    return (
        <div className={styles.comment}>
            <img src="https://github.com/flavioanalistadesistema.png" alt="" />
            <dir className={styles.commentox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndtime}>
                            <strong>Flavio Santos</strong>
                            <time title="23 de outubro as 08:00" dateTime="2022-05-11 08:00:00">Publicado há 1 dia</time>
                        </div>
                        <button title='Deletar comentário'>
                            <Trash />
                        </button>
                        <p>Muito bom Devon, parabéns!! 👏👏</p>
                    </header>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </dir>
        </div>
    );
}