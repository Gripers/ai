import { useEffect, useState } from 'react';
import { TelegramWebApps } from 'telegram-webapps-types';

export const useTelegramWebApp = () => {
  const [tg, setTg] = useState<TelegramWebApps.WebApp>();

  useEffect(() => {
    setTg(window.Telegram?.WebApp);
    tg?.ready();
  }, []);

  return tg;
};
