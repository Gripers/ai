import { useState, useId } from 'react';
import styles from './styles.module.scss';

import Drawer from 'react-modern-drawer';
import Image from 'next/image';
import Select from 'react-select';

import { useTelegramWebApp } from '@/hooks/useTelegramWebApp';
import { useGetAllChatsQuery } from '@/redux/api/chatsApi';

const DrawerComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data } = useGetAllChatsQuery('');
  const tg = useTelegramWebApp();

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  console.log(data);

  return (
    <>
      <button onClick={toggleDrawer}>
        <Image src='/static/media/burger.svg' alt='' width={22} height={22} />
      </button>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction='left'
        customIdSuffix={useId()}
        className={styles.drawer}
      >
        <div className={styles.header}>
          <div className={styles.info}>
            <Image
              src='/static/media/avatar.jpg'
              alt=''
              width={60}
              height={60}
            />
            <div>
              <b>{tg?.initDataUnsafe.user?.first_name}</b>
              <p>@{tg?.initDataUnsafe.user?.username}</p>
            </div>
          </div>
          <div className={styles.check}>
            <strong>150</strong>
            <Image
              src='/static/media/coins.svg'
              alt=''
              width={22}
              height={22}
            />
            <button>Купить</button>
          </div>
        </div>
        <div className={styles.body}>
          <h4>Роль для Chat-GPT</h4>
          <Select
            options={options}
            className={styles.select}
            placeholder='Роль'
            instanceId={useId()}
          />
        </div>
        <div className={styles.footer}>
          <h4>История чатов</h4>
          <ul></ul>
        </div>
      </Drawer>
    </>
  );
};

export default DrawerComponent;
