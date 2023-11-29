import React from 'react';
import '../globals.css';
import styles from './login.module.css';

export default function Login() {
  return (
    <main className={styles.loginMain}>
      <h1 className={styles.title}>Login</h1>
      <form className={styles.form}>
        <label className={styles.label} htmlFor="username">
          Usuário
        </label>
        <input
          className={styles.input}
          type="text"
          id="username"
          name="username"
          placeholder="Digite seu usuário"
        />

        <label className={styles.label} htmlFor="password">
          Senha
        </label>
        <input
          className={styles.input}
          type="password"
          id="password"
          name="password"
          placeholder="Digite sua senha"
        />

        <a className={styles.button} href="./dashboard">
          Login
        </a>

        <a className={styles.link} href="./registro">
          Registre-se
        </a>

        <a className={styles.link} href="./recover">
          Esqueceu sua Senha?
        </a>

        <a className={styles.link} href="../">
          Voltar ao Inicial
        </a>
      </form>
    </main>
  );
}
