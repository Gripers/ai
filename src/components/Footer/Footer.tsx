import styles from './styles.module.scss';

import Image from 'next/image';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <form>
        <input type='text' placeholder='Message...' />
        <button type='submit'>
          <Image src='/static/media/send.svg' alt='' width={20} height={20} />
        </button>
      </form>
    </footer>
  );
};

export default Footer;
