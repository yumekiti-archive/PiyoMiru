import { FC, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import BusPage from './pages/BusPage';
import GroupListPage from './pages/GroupListPage';
import OperationListPage from './pages/OperationListPage';
import UsagePage from './pages/UsagePage';
import HomePage from './pages/HomePage';
import LP from './pages/LPpage';
import RegisterPage from './pages/RegisterPage';
import GroupPage from './pages/GroupPage';
import SettingsPage from './pages/SettingsPage';

const Router: FC = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/usage' element={<UsagePage />} />
      <Route path='/bus/:id' element={<BusPage />} />
      <Route path='/list' element={<GroupListPage />} />
      <Route path='/list/:id' element={<OperationListPage />} />
      <Route path='/lp' element={<LP />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/group' element={<GroupPage />} />
      <Route path='/settings' element={<SettingsPage />} />
    </Routes>
  );
};

export default Router;
