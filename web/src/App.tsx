import { FC, useEffect } from 'react';
import { useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider } from 'react-query';
import Router from './router';
import socket from './socket';

const queryClient = new QueryClient();

const App: FC = () => {
  useEffect(() => {
    if ("Notification" in window) {
      // 通知が許可されていたら早期リターン
      const permission = Notification.permission;
      if (permission === "denied" || permission === "granted") {
        return;
      }
      // 通知の許可を求める
      Notification.requestPermission();
    }
  }, []);

  const handlePushNotif = () => {
    if ("Notification" in window) {
      const notif = new Notification("バスに動きがありました");
    }
  };

  socket.on('connect', () => {
    console.log('Connected to serve');
  });

  socket.on('refresh', () => {
    handlePushNotif();
    queryClient.invalidateQueries('me');
    queryClient.invalidateQueries('user');
    queryClient.invalidateQueries('bus');
    queryClient.invalidateQueries('operation');
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  );
};

export default App;
