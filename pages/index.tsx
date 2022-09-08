import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        
        <title>Ryan Webster</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.video}>
          <video src='/video.webm' typeof='video/webm' autoPlay playsInline muted loop/>
        </div>
      <div className={styles.image}/>
        <h1 className={styles.title}>
          Ryan Webster
        </h1>

        <p className={styles.description}>
          Estudante de programação e amante de I.A
        </p>

        <div className={styles.grid}>
          <a 
            href="https://github.com/ryanwebstert" 
            className={styles.card}
            target="_blank" rel="noopener noreferrer"
          >
            <h2>GitHub &rarr;</h2>
            <p>Veja algum de meus projetos no GitHub.</p>
          </a>

          <a
            href="https://www.linkedin.com/in/ryan-webster-601054244/" 
            className={styles.card}
            target="_blank" rel="noopener noreferrer"
          >
            <h2>Linkedin &rarr;</h2>
            <p>Um ótimo lugar para entrar em contato comigo.</p>
          </a>

          <a
            href="https://webster-blog.vercel.app/"
            className={styles.card}
            target="_blank" rel="noopener noreferrer"
          >
            <h2>Webster Blog &rarr;</h2>
            <p>Venha conhecer o blog que eu criei e mantenho ativo.</p>
          </a>

          <a
            href=""
            className={styles.card}
            target="_blank" rel="noopener noreferrer"
          >
            <h2>Sobre mim &rarr;</h2>
            <p>
              Aqui falo um pouco sobre minha trajetória.
            </p>
          </a>
        </div>
      </main>

    </div>
  )
}

export default Home
