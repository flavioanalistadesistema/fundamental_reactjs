import { Post } from "../src/Post";
import { Header } from "./components/Header";
import './styles.css'

export function App() {
  return (
    <div>
      <Header />
      <Post 
        author="Flávio Santos"
        content="Desenvolvedor Senior"
      />
      <Post 
        author="Luciana Santos"
        content="Design Sobrancelha"
      />
    </div>
  );
}