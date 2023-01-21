import { FC, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { useMe } from './hooks/users';
import socket from './socket';

import LoginPage from './pages/LoginPage';
import BusPage from './pages/BusPage';
import ListPage from './pages/ListPage';
import OperationListPage from './pages/OperationListPage';
import UsagePage from './pages/UsagePage';
import HomePage from './pages/HomePage';
import LP from './pages/LPpage';
import RegisterPage from './pages/RegisterPage';
import GroupPage from './pages/GroupPage';
import SettingsPage from './pages/SettingsPage';
import RidePage from './pages/RidePage';
import ScanPage from './pages/ScanPage';
import FamilySetPage from './pages/FamilySetPage';
import FamilyPage from './pages/FamilyPage';
import GroupSetPage from './pages/GroupSetPage';
import GroupRegisterPage from './pages/GroupRegisterPage';

const Router: FC = () => {
  const { data: me } = useQuery('me', () => useMe().then((res) => res.data));

  socket.on('connect', () => {
    console.log('connected');
  });

  useEffect(() => {
    me && me.group && socket.emit('join', me.group.id);
  }, [me]);

  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/usage' element={<UsagePage />} />
      <Route path='/bus/:id' element={<BusPage />} />
      <Route path='/list' element={<ListPage />} />
      <Route path='/list/:id' element={<OperationListPage />} />
      <Route path='/lp' element={<LP />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/group' element={<GroupPage />} />
      <Route path='/settings' element={<SettingsPage />} />
      <Route path='/ride/:id' element={<RidePage />} />
      <Route path='/family/:id' element={<FamilySetPage />} />
      <Route path='/scan/:id' element={<ScanPage />} />
      <Route path='/family' element={<FamilyPage />} />
      <Route path='/group/:id' element={<GroupSetPage />} />
      <Route path='/group/register' element={<GroupRegisterPage />} />
    </Routes>
  );
};

export default Router;
