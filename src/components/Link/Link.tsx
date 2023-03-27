import { useEffect, useRef, useState } from 'react';
import { LinkType } from '../../types/types';
import { assertIsNode } from '../../utils/assertIsNode';
import styles from './Link.module.scss';

interface Props {
  link: LinkType;
}
// mock active link according figma
const ACTIVE_LINK = 'Contact';

const Link = ({ link }: Props) => {
  // state for deeper links
  const [showNested, setShowNested] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const toggleNested = () => {
    setShowNested((prev) => !prev);
  };

  const navigate = (e: React.MouseEvent<HTMLElement>, path: string) => {
    // mock navigation to another page
    alert(`navigated to ${path}`);
    setShowNested(false);
  };

  useEffect(() => {
    // close when clicking outside nesting menu
    const handler = (e: MouseEvent) => {
      assertIsNode(e.target);
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowNested(false);
      }
    };
    window.addEventListener('click', handler);
    return () => {
      window.removeEventListener('click', handler);
    };
  });

  return (
    <li className={`${styles.link} ${styles.linkItem}`}>
      <div
        ref={menuRef}
        onClick={(e) => {
          link.nested ? toggleNested() : navigate(e, link.name);
        }}
        className={`${styles.link} ${ACTIVE_LINK === link.name ? styles.active : ''}`}
      >
        {link.name}
        {link.nested && <span className={`${styles.arrow} ${showNested ? styles.isOpen : ''}`} />}
      </div>
      {showNested && (
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
