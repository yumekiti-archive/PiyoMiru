import { FC } from 'react';
import Loading from './components/Loading';
import { Routes, Route } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';

const App: FC = () => {
  return (
    <>
      <Loading />
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/home' element={<HomePage />} />
      </Routes>
    </>
  );
};

export default App;
