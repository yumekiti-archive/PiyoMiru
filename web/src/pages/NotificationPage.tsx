import { FC, useEffect, useState } from 'react';
import { useMeQuery } from '../hooks/queries';
import socket from '../libs/socket';

const NotificationPage: FC = () => {
  const { data: me } = useMeQuery();

  useEffect(() => {
    me && me.group && socket.emit('leave', me.group.id);
  }, [me]);

  return <div>通知</div>;
};

export default NotificationPage;
