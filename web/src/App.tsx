import { FC } from 'react';
import Loading from './components/Loading';
import { Routes, Route } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import BusPage from './pages/BusPage';
import ListPage from './pages/ListPage';
import UsagePage from './pages/initials/UsagePage';
import HomePage from './pages/HomePage';

const App: FC = () => {
  return (
    <>
      <Loading />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/usage' element={<UsagePage />} />
        <Route path='/bus' element={<BusPage />} />
        <Route path='/list' element={<ListPage />} />
      </Routes>
    </>
  );
};

export default App;
