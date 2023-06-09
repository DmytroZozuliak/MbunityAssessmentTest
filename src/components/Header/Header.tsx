import { useEffect, useState } from 'react';
import { ReactComponent as UerIcon } from '../../assets/userLogo.svg';
import { ReactComponent as CartIcon } from '../../assets/cartLogo.svg';
import Link from '../Link/Link';
import styles from './Header.module.scss';
import { LINKS } from './links';

const Header = () => {
  // state for open/closed burger menu
  const [showBurger, setShowBurger] = useState(false);
  const activeClass = showBurger ? styles.active : '';

  // locking scrolling when burger is open
  useEffect(() => {
    const body = document.body;
    if (showBurger) {
      body.classList.add('lock');
    } else {
      body.classList.remove('lock');
    }
  }, [showBurger]);

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
