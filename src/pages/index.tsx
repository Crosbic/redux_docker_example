import { Inter } from 'next/font/google'

import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.headerWrapper}>
          <h1>Redux</h1>
        </div>
        <div className={styles.counterContainer}>
          <h2>Счётчик</h2>
          <div className={styles.buttonContainer}>
            <button
              className={styles.button}
              style={{ backgroundColor: 'green' }}
            >
              Добавить
            </button>
            <button
              className={styles.button}
              style={{ backgroundColor: 'darkorchid' }}
            >
              Убрать
            </button>
            <button
              className={styles.button}
              style={{ backgroundColor: 'darkcyan' }}
            >
              Async
            </button>
          </div>
        </div>
      </main>
    </>
  )
}
