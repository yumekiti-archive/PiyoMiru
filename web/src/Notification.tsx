import { FC, useEffect } from "react";

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

export const handlePushNotif = () => {
  if ('Notification' in window) {
    const notif = new Notification('バスに動きがありました');
  }
};

export default NotificationFC;