import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    {/* <div className={styles.hellodiv}> */}
    <div className={styles.divhello}>
      <h1>Hello World! from Ahmad</h1>
      <h5>My First Nextjs App deployed at Vercel </h5>
    </div>
    {/* </div> */}
    </>
  )
}
