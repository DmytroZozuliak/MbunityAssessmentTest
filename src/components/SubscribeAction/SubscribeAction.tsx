import { useState } from 'react';
import Button from '../UI/Button';
import styles from './SubscribeAction.module.scss';

const SubscribeAction = () => {
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
  );
};

export default SubscribeAction;
