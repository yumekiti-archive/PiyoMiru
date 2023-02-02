import { FC, useEffect } from 'react';

const NotificationFC: FC = () => {
  useEffect(() => {
    if ('Notification' in window) {
      const permission = Notification.permission;
      if (permission === 'denied' || permission === 'granted') {
        return;
      }
      Notification.requestPermission();
    }
  }, []);

  return null;
};

export const handlePushNotif = (text: string) => {
  if ('Notification' in window) {
    new Notification(text);
  }
};

export default NotificationFC;
