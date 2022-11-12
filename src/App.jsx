import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";
import "./global.css";

const post = [
  {
    id: 1,
    author: {
        avatarUrl: 'https://github.com/flavioanalistadesistema.png',
        name: 'Flavio Santos',
        role: 'Programmer Tecnology'
    },
    content: [
        {type: 'paragraph', content:'Fala galeraa 👋'},
        {type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
        {type: 'link', content:'flavio/santos'}
    ],
    publishedAt: new Date('2022-11-12 08:00:00')
  },
  {
    id: 2,
    author: {
        avatarUrl: 'https://github.com/thiagoaviscardi.png',
        name: 'Thiago Vascardi',
        role: 'Programmer Tecnology'
    },
    content: [
        {type: 'paragraph', content:'Fala galeraa 👋'},
        {type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
        {type: 'link', content:'thiago/varcardi'}
    ],
    publishedAt: new Date('2022-01-10 08:00:00')
  }
]

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {post.map(post => {
            return (
              <Post 
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  );
}
