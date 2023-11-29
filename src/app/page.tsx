import './globals.css';
import styles from './home.module.css';

export default function Home() {
  return (
    <main className={styles.homeMain}>
      <h1>Bem Vindo a Página Inicial</h1>
      <a href="./login" className={styles.button}>
        Clique aqui para fazer Login
      </a>
      <a href="./registro" className={styles.button}>
        Clique aqui para se Registrar
      </a>
    </main>
  );
}