import styles from '../css/Display.module.css'
import { useContext} from 'react'
import { DataContext } from '../contexts/DataContext'

const Display = () => {
  const { dataInput } = useContext(DataContext)
  return (
    <div className={styles.displayWrapper}>
      <div className={styles.display}>
        <span className={styles.input}>{dataInput}</span>
      </div>
    </div>
  );
}

export default Display;