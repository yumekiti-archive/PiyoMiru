import { FC } from 'react';
import { useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider } from 'react-query';
import Router from './router';
import socket from './socket';

const queryClient = new QueryClient();

const App: FC = () => {
  socket.on('connect', () => {
    console.log('Connected to serve');
  });

  socket.on("refresh", () => {
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
