import styles from './Header.modules.css'
import igniteLogol from '../assets/Ignite-logo.svg' 

export function Header() {
  return (
    <header className={styles.header}>
        <img src={igniteLogol} alt="Imagem logol" />
    </header>
  );
}
