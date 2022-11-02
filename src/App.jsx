import { Post } from "../src/Post";

export function App() {
  return (
    <div>
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