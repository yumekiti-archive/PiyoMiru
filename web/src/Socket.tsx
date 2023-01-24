import { FC, useEffect } from 'react';
import { useQueryClient, useQuery } from 'react-query';
import socket from './libs/socket';

import { handlePushNotif } from './Notification';
import { useMe } from './hooks/users';

const SocketFC: FC = () => {
  const queryClient = useQueryClient();
  const { data: me } = useQuery('me', () => useMe().then((res: any) => res.data));

  useEffect(() => {
    me && me.group && socket.emit('join', me.group.id);
  }, [me]);

  useEffect(() => {
    socket.on('connect', () => {
      console.log('connected');
    });

    socket.on('refresh', () => {
      handlePushNotif();
      queryClient.invalidateQueries('me');
      queryClient.invalidateQueries('user');
      queryClient.invalidateQueries('bus');
      queryClient.invalidateQueries('operation');
    });
  }, []);

  return null;
};

export default SocketFC;
