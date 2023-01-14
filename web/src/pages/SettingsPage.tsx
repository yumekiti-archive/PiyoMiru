import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import SettingsTemplate from '../components/templates/SettingsTemplate';

const SettingsPage: FC = () => {
  const navigate = useNavigate();

  const onClickLogout = () => {
    localStorage.removeItem('jwt');
    navigate('/login');
  };

  return <SettingsTemplate onClickLogout={onClickLogout} />;
};

export default SettingsPage;
