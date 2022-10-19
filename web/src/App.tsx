import { FC } from 'react';
import Loading from './components/Loading';
import { Routes, Route } from 'react-router-dom';

import LoginPage from './pages/LoginPage';

const App: FC = () => {
  return (
    <>
      <Loading />
      <Routes>
        <Route path='/' element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;