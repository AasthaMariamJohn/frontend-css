import styles from './index.module.css'
import Button from '../components/common/button'


export default function Home() {
  return (
    <>
    <h1 className={styles['test']}>Make your home comfy and beautiful.</h1>
    <Button text='Shop' variant='accent'/>
    <Button text='buy'/>
    </>
  )
}
