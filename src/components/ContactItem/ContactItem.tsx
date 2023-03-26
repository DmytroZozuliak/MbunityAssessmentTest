import styles from './ContactItem.module.scss';

interface ContactItemProps {
  text: string;
  icon: React.ReactNode;
}

// reusable component from main section and footer

const ContactItem = ({ text, icon }: ContactItemProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.iconWrapper}>{icon}</div>
      <p>{text}</p>
    </div>
  );
};

export default ContactItem;
