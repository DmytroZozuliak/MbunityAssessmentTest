import { useState } from 'react';
import { ReactComponent as PhoneLogo } from '../../assets/bxs_phone-call.svg';
import { ReactComponent as LocationLogo } from '../../assets/carbon_location-filled.svg';
import { ReactComponent as EmailLogo } from '../../assets/ic_sharp-email.svg';
import { contacts } from '../../constants';
import Button from '../UI/Button';
import ContactItem from '../ContactItem';
import styles from './Footer.module.scss';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [tooltip, setTooltip] = useState(false);

  const subscribe = () => {
    // sending email
    const emailRegexp =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!email.match(emailRegexp)) {
      setTooltip(true);
      setTimeout(() => {
        setTooltip(false);
      }, 2_000);
    } else {
      alert(`ypu subscribed on ${email}`);
      setEmail('');
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>Logo Here</div>

      <div className={styles.dividerWrapper}>
        <div className={styles.divider} />
      </div>
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
            <li>Refund Policy</li>
          </ul>
        </div>

        <div className={styles.linksColumn}>
          <h3 className={styles.subtitle}>Quick Links</h3>
          <ul className={styles.links}>
            <li>Techlabz Keybox</li>
            <li>Downloads</li>
            <li>Forum</li>
          </ul>
        </div>

        <div className={styles.subscribeSection}>
          <h3 className={styles.subtitle}>Join Our Newsletter</h3>
          <div className={styles.subscribeAction}>
            <div className={styles.inputField}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.input}
                placeholder="Your    address"
              />
              {tooltip && <span className={styles.tooltip}>Email is incorrect</span>}
            </div>
            <Button onClick={subscribe} className={styles.button}>
              Subscribe
            </Button>
          </div>
          <span>*&nbsp;&nbsp;Will send you weekly updates for your better tool management.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
