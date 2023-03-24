import { useState } from 'react';
import { LinkType } from '../../types/types';
import styles from './Link.module.scss';

const Link = ({ link }: { link: LinkType }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNested = () => {
    setIsOpen((prev) => !prev);
  };
  const navigate = (e: React.MouseEvent<HTMLElement>, path: string) => {
    e.stopPropagation();
    console.log('navigated to', path);
  };
  const activeLink = 'Contact';

  return (
    <li
      onClick={(e) => {
        link.nested ? toggleNested() : navigate(e, link.name);
      }}
      className={`${styles.link} ${styles.linkItem}
      ${activeLink === link.name ? styles.active : ''}`}
    >
      {link.name}
      {link.nested && <span className={`${styles.arrow} ${isOpen ? styles.isOpen : ''}`}></span>}
      {isOpen && (
        <ul className={styles.nestedLinks}>
          {link.nested?.map((nestedLink) => (
            <li
              key={nestedLink.name}
              className={`${styles.nestedLink} ${styles.linkItem}`}
              onClick={(e) => {
                navigate(e, nestedLink.name);
              }}
            >
              {nestedLink.name}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default Link;
