import '../globals.css';
import styles from './dashboard.module.css';

export default function Dashboard() {
  return (
    <main>
      <h1>Dashboard</h1>
      <a className={styles.a} href="../">
        Sair
      </a>
    </main>
  );
}