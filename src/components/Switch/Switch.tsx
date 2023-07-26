import styles from './styles.module.scss';

import { useRouter } from 'next/router';
import Link from 'next/link';

const Switch = () => {
  const router = useRouter();

  return (
    <nav className={styles.switch}>
      <ul>
        <li className={router.pathname === '/' ? styles.active : ''}>
          <Link href='/'>Chat-GPT</Link>
        </li>
        <li className={router.pathname === '/mid-journey' ? styles.active : ''}>
          <Link href='/mid-journey'>Mid-Journey</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Switch;
