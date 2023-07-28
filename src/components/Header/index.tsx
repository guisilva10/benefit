import Head from "next/head";
import styles from "../../styles/Header.module.scss";
import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";

interface Login {
  id: string;
  Login: string;

  Senha: string;
}

export default function Header() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [teste, setTeste] = useState<Login[]>([]);





  return (
    <>
      <Head>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap');
        `}</style>
      </Head>

      <div className={styles.container}>
        <div className={styles.bg}>
        <div className={styles.ImageContainer}>
          <img className={styles.logo} src="/logoEscura 2.png" alt="logo" />
        </div>
        </div>

        <div className={styles.LoginContainer}>
          <div className={styles.Login}>
            <p className={styles.title}>Detalhes do pagamento</p>
            <p className={styles.label}>Endereço de Email</p>
            <input
              id="email"
              className={styles.field}
              type="email"
             
            />
            <p className={styles.label}>Número do Cartão</p>
            <input
              id="number"
              className={styles.field}
              type="text"
             
            />
           
          <div className={styles.Group}>
            <div className={styles.form}>
              <p className={styles.label}>Número do Cartão</p>
            <input
              id="number"

              className={styles.field}
              type="text"
             
            />
              </div>
            <div className={styles.form}>
              <p className={styles.label}>Número do Cartão</p>
            <input
              id="number"

              className={styles.field}
              type="text"
             
            />
              </div>
            </div>
            <div className={styles.linha}></div>
            <div className={styles.value}>
            <p className={styles.label}>Valor Total</p>
            <p className={styles.valuePrice}>R$9,00</p>
            </div>


            <button className={styles.button}>
              Realizar Pagamento
            </button>
            <img className={styles.logo2} src="/logo2.png" alt="logo" />
            </div>
            </div>
          </div>
    </>
  );
  
}
