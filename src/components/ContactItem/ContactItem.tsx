import styles from './ContactItem.module.scss';

interface ContactItemProps {
  text: string;
  icon: React.ReactNode;
}

const ContactItem = ({ text, icon }: ContactItemProps) => {
  return (
    <div className={styles.wrapper}>
      {icon}
      <p>{text}</p>
    </div>
  );
};

export default ContactItem;
