import Link from '../Link/Link';
import styles from './Header.module.scss';
import { LINKS } from './links';
import { ReactComponent as UerIcon } from '../../assets/userLogo.svg';
import { ReactComponent as CartIcon } from '../../assets/cartLogo.svg';
import { useState } from 'react';

const Header = () => {
  const [showBurger, setShowBurger] = useState(false);

  const activeClass = showBurger ? styles.active : '';

  return (
    <header className={`${styles.header} container`}>
      <div className={`${styles.logo} ${activeClass}`}>Logo Here</div>

      <div className={`${styles.menu} ${activeClass}`}>
        <div
          className={`${styles.burger} ${activeClass}`}
          onClick={() => setShowBurger((prev) => !prev)}
        >
          <span />
        </div>
        <nav className={`${styles.nav} ${activeClass}`}>
          <ul className={styles.links}>
            {LINKS.map((link) => (
              <Link key={link.name} link={link} />
            ))}
          </ul>

          <div className={styles.icons}>
            <div className={styles.iconContainer}>
              <UerIcon className={`${styles.iconSVG} ${styles.iconUser}`} />
            </div>
            <div className={styles.iconContainer}>
              <CartIcon className={`${styles.iconSVG} ${styles.iconCart}`} />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
