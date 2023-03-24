import ContactInformation from '../ContactInformation';
import styles from './Main.module.scss';

const Main = () => {
  return (
    <main>
      <div className={styles.container}>
        <h1 className={styles.title}>Contact Us</h1>
        <p className={styles.subtitle}>Any question or remarks? Just write us a message!</p>

        <div className={styles.letterContainer}>
          <ContactInformation />
        </div>
      </div>
    </main>
  );
};

export default Main;
