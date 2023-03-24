import Link from '../Link/Link';
import styles from './Header.module.scss';
import { LINKS } from './links';
import { ReactComponent as UerIcon } from '../../assets/userLogo.svg';
import { ReactComponent as CartIcon } from '../../assets/cartLogo.svg';

const Header = () => {
  return (
    <header className={`${styles.header} container`}>
      <div className={styles.logo}>Logo Here</div>
      <nav className={styles.nav}>
        <ul className={styles.links}>
          {LINKS.map((link) => (
            <Link key={link.name} link={link} />
          ))}
        </ul>

        <div className={styles.icons}>
          <div className={styles.iconCircle}>
            <UerIcon className={`${styles.icon} ${styles.iconUser}`} />
          </div>
          <div className={styles.iconCircle}>
            <CartIcon className={`${styles.icon} ${styles.iconCart}`} />
          </div>
        </div>
      </nav>
      <div className={styles.burger}>Burger</div>
    </header>
  );
};

export default Header;
