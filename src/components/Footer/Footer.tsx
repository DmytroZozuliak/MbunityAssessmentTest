import { ReactComponent as PhoneLogo } from '../../assets/bxs_phone-call.svg';
import { ReactComponent as LocationLogo } from '../../assets/carbon_location-filled.svg';
import { ReactComponent as EmailLogo } from '../../assets/ic_sharp-email.svg';
import { contacts } from '../../constants';
import ContactItem from '../ContactItem';
import Button from '../UI/Button';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>Logo Here</div>
      <div className={styles.divider} />
      <div className={`container ${styles.wrapper}`}>
        <div className={styles.contactSection}>
          <h3 className={styles.subtitle}>Reach us</h3>
          <div className={styles.contacts}>
            <ContactItem text={contacts.phone} icon={<PhoneLogo />} />
            <ContactItem text={contacts.email} icon={<EmailLogo />} />
            <ContactItem text={contacts.address} icon={<LocationLogo />} />
          </div>
        </div>
        <div className={styles.linksColumn}>
          <h3 className={styles.subtitle}>Company</h3>
          <ul className={styles.links}>
            <li>About</li>
            <li>Contact</li>
            <li>Blogs</li>
          </ul>
        </div>

        <div className={styles.linksColumn}>
          <h3 className={styles.subtitle}>Legal</h3>
          <ul className={styles.links}>
            <li>Privacy Policy</li>
            <li>Terms & Services</li>
            <li>Terms of Use</li>
            <li>Refund</li>
          </ul>
        </div>

        <div className={styles.linksColumn}>
          <h3 className={styles.subtitle}>Links</h3>
          <ul className={styles.links}>
            <li>Techlabz Keybox</li>
            <li>Downloads</li>
            <li>Forum</li>
          </ul>
        </div>

        <div className={styles.subscribeSection}>
          <h3 className={styles.subtitle}>Join Our Newsletter</h3>

          <div className={styles.subscribeAction}>
            <input className={styles.input} placeholder="Your address" />
            <Button className={styles.button}>Subscribe</Button>
          </div>

          <span>* Will send you weekly updates for your better tool management.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
