import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

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
import NotificationPage from './pages/NotificationPage';

const Router: FC = () => {
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
      <Route path='/notification' element={<NotificationPage />} />
    </Routes>
  );
};

export default Router;
