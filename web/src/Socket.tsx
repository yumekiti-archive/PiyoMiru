import { FC, useEffect } from 'react';
import { useQueryClient } from 'react-query';
import socket from './libs/socket';

import { handlePushNotif } from './Notification';
import { useRefresh, useMeQuery } from './hooks/queries';

const SocketFC: FC = () => {
  const queryClient = useQueryClient();
  const { data: me } = useMeQuery();

  useEffect(() => {
    me && me.group && socket.emit('join', me.group.id);
  }, [me]);

  useEffect(() => {
    socket.on('connect', () => {
      console.log('connected');
    });

    socket.on('refresh', () => {
      handlePushNotif();
      useRefresh(queryClient);
    });
  }, []);

  return null;
};

export default SocketFC;
