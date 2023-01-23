import { FC, useEffect } from 'react';
import { useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider } from 'react-query';
import Router from './router';
import socket from './libs/socket';
import AppUrlListener from './AppUrlListener';

const queryClient = new QueryClient();

const App: FC = () => {
  useEffect(() => {
    if ('Notification' in window) {
      const permission = Notification.permission;
      if (permission === 'denied' || permission === 'granted') {
        return;
      }
      Notification.requestPermission();
    }
  }, []);

  const handlePushNotif = () => {
    if ('Notification' in window) {
      const notif = new Notification('バスに動きがありました');
    }
  };

  socket.on('refresh', () => {
    handlePushNotif();
    queryClient.invalidateQueries('me');
    queryClient.invalidateQueries('user');
    queryClient.invalidateQueries('bus');
    queryClient.invalidateQueries('operation');
  });

  return (
    <QueryClientProvider client={queryClient}>
      <AppUrlListener />
      <Router />
    </QueryClientProvider>
  );
};

export default App;
