import { ReactComponent as TwitterLogo } from '../../assets/twitterILogo.svg';
import { ReactComponent as InstagramLogo } from '../../assets/instagramLogo.svg';
import { ReactComponent as DiscordLogo } from '../../assets/discordLogo.svg';
import { ReactComponent as PhoneLogo } from '../../assets/bxs_phone-call.svg';
import { ReactComponent as LocationLogo } from '../../assets/carbon_location-filled.svg';
import { ReactComponent as EmailLogo } from '../../assets/ic_sharp-email.svg';
import ContactItem from '../ContactItem';
import { contacts } from '../../constants';
import Form from '../Form';
import styles from './Main.module.scss';

const Main = () => {
  return (
    <main>
      <div className={styles.container}>
        <h1 className={styles.mainTitle}>Contact Us</h1>
        <p className={styles.mainSubtitle}>Any question or remarks? Just write us a message!</p>

        <div className={styles.letterContainer}>
          <div className={styles.wrapper}>
            <div className={styles.titleSection}>
              <h2 className={styles.title}>Contact Information</h2>
              <p className={styles.subtitle}>Say something to start a live chat!</p>
            </div>

            <div className={styles.contactSection}>
              <ContactItem text={contacts.phone} icon={<PhoneLogo />} />
              <ContactItem text={contacts.email} icon={<EmailLogo />} />
              <ContactItem text={contacts.address} icon={<LocationLogo />} />
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
          <Form />
        </div>
      </div>
    </main>
  );
};

export default Main;
