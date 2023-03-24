import { useState } from 'react';
import { LinkType } from '../../types/types';
import styles from './Link.module.scss';

interface Props {
  link: LinkType;
}

const ACTIVE_LINK = 'Contact';

const Link = ({ link }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNested = () => {
    setIsOpen((prev) => !prev);
  };
  const navigate = (e: React.MouseEvent<HTMLElement>, path: string) => {
    e.stopPropagation();
    alert(`navigated to ${path}`);
  };

  return (
    <li
      onClick={(e) => {
        link.nested ? toggleNested() : navigate(e, link.name);
      }}
      className={`${styles.link} ${styles.linkItem}
      ${ACTIVE_LINK === link.name ? styles.active : ''}`}
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
