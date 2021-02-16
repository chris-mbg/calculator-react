import styles from '../css/Display.module.css'

const Display = () => {
  return (
    <div className={styles.displayWrapper}>
      <div className={styles.display}>
        <span className={styles.input}>Here goes the data</span>
      </div>
    </div>
  );
}

export default Display;