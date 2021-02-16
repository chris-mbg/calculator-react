import Calculator from '../components/Calculator'
import styles from '../css/Home.module.css'

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.wrapper}>
        <Calculator />
      </div>
    </div>
  );
}

export default Home;