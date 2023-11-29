import React from 'react';
import '../globals.css';
import styles from './recover.module.css';

export default function Recover() {
  return (
    <main className={styles.recoverMain}>
      <h1 className={styles.title}>Recuperação de Senha</h1>
      <form className={styles.form}>
        <label className={styles.label} htmlFor="newPassword">
          Nova Senha
        </label>
        <input
          className={styles.input}
          type="password"
          id="newPassword"
          name="newPassword"
          placeholder="Digite a nova senha"
        />

        <label className={styles.label} htmlFor="confirmPassword">
          Confirmar Senha
        </label>
        <input
          className={styles.input}
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Confirmar senha"
        />

        <a className={styles.button} href="../login">
          Redefinir Senha
        </a>

        <a className={styles.link} href="../login">
          Voltar
        </a>
      </form>
    </main>
  );
}

