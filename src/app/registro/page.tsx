import React from 'react';
import '../globals.css';
import styles from './registro.module.css';

export default function Registro() {
  return (
    <main className={styles.registerMain}>
      <h1 className={styles.title}>Registre-se</h1>
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

        <label className={styles.label} htmlFor="email">
          Email
        </label>
        <input
          className={styles.input}
          type="text"
          id="email"
          name="email"
          placeholder="Digite seu email"
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

        <label className={styles.label} htmlFor="confirmPassword">
          Confirme a Senha
        </label>
        <input
          className={styles.input}
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Confirme sua senha"
        />

        <a className={styles.button} href="./dashboard">
          Registrar
        </a>

        <a className={styles.link} href="./login">
          Já tenho Login
        </a>

        <a className={styles.link} href="../">
          Voltar para Tela Inicial
        </a>
      </form>
    </main>
  );
}
