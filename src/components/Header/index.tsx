import Head from 'next/head'
import React from 'react'
import styles from '@/styles/Header.module.scss'

const Header = () => {
  return (
    <>
      <Head>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&display=swap');
        `}</style>
      </Head>
      <div className={styles.HeaderContainer}>
        <div className={styles.Image}>
        <div className={styles.HeaderSearch}>
          <div className={styles.HeaderImage}>
          <img className={styles.logo} src="/logoEscura 2.png" alt="logo" />
          </div>
          <div className={styles.HeaderContainerIcons}>
            <img
              src="./bell.png"
              className={styles.HeaderIcon}
              height={20}
              width={20}
            />
            <img
              src="./user.png"
              className={styles.HeaderIcon}
              height={20}
              width={20}
            />
            <img
              src="./line.png"
              className={styles.HeaderIcon}
              id={styles.HeaderIcon}
            />
            <img
              src="./interrogation.png"
              className={styles.HeaderIcon}
              height={20}
              width={20}
              id={styles.HeaderIcon}
            />
          </div>
        </div>
        <div className={styles.HeaderTextContainer}>
          <div className={styles.HeaderTextDescription}>
            <p className={styles.Title}>Clientes</p>
            <p>
            Aqui voce encontra todos os clientes registrados no site
            </p>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default Header