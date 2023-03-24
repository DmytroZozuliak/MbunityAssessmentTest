import { contacts } from '../../constants';
import ContactItem from '../ContactItem';
import { ReactComponent as TwitterLogo } from '../../assets/twitterILogo.svg';
import { ReactComponent as InstagramLogo } from '../../assets/instagramLogo.svg';
import { ReactComponent as DiscordLogo } from '../../assets/discordLogo.svg';

import styles from './ContactInformation.module.scss';

const ContactInformation = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.titleSection}>
        <h2 className={styles.title}>Contact Information</h2>
        <p className={styles.subtitle}>Say something to start a live chat!</p>
      </div>

      <div className={styles.contactSection}>
        <ContactItem text={contacts.phone} icon={<p>ICON_1</p>} />
        <ContactItem text={contacts.phone} icon={<p>ICON_2</p>} />
        <ContactItem text={contacts.address} icon={<p>ICON_3</p>} />
      </div>
      <div className={styles.iconsSection}>
        <div className={styles.iconSVG}>
          <TwitterLogo />
        </div>
        <div className={styles.iconSVG}>
          <InstagramLogo />
        </div>
        <div className={styles.iconSVG}>
          <DiscordLogo />
        </div>
      </div>
      <div className={styles.bigCircle} />
      <div className={styles.smallCircle} />
    </div>
  );
};

export default ContactInformation;
