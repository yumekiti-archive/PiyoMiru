import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import SettingsTemplate from '../components/templates/SettingsTemplate';

import { useLogout } from '../hooks/auth';

const SettingsPage: FC = () => {
  const navigate = useNavigate();

  const HandleLogout = () => {
    useLogout();
    navigate('/login');
  };

  return <SettingsTemplate onClickLogout={HandleLogout} />;
};

export default SettingsPage;
