import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
        <header>
            <div className={styles.author}>
                <img className={styles.avatar} src="https://github.com/flavioanalistadesistema.png"/>
                <div className={styles.authorInfo}>
                    <strong>Flávio Santos</strong>
                    <span>Programmer Tecnology</span>
                </div>
            </div>
            <time title="23 de outubro as 08:00" dateTime="2022-05-11 08:00:00">Publicado há 1 dia</time>
        </header>
        <div className={styles.content}>
            <p>Fala galeraa 👋</p>
            <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
            <p><a href=""> 👉 jane.design/doctorcare</a></p>
            <p><a href="">#novoprojeto #nlw #rocketseat</a></p>            
        </div>
    </article>
  );
}
