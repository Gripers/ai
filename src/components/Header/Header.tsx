import styles from './styles.module.scss';

import Image from 'next/image';

import DrawerComponent from '../Drawer/Drawer';
import Switch from '../Switch/Switch';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.top}>
        <DrawerComponent />
        <h3>AI-Tg.bot</h3>
        <div className={styles.check}>
          <strong>150</strong>
          <Image src='/static/media/coins.svg' alt='' width={22} height={22} />
        </div>
      </div>
      <Switch />
    </header>
  );
};

export default Header;
