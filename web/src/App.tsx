import { FC } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Router from './Router';
import AppUrlListener from './AppUrlListener';
import NotificationFC from './Notification';
import SocketFC from './Socket';

const queryClient = new QueryClient();

const App: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NotificationFC />
      <SocketFC />
      <AppUrlListener />
      <Router />
    </QueryClientProvider>
  );
};

export default App;
