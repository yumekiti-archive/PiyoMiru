import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import HomeTemplate from '../components/templates/HomeTemplate';

import { useMe } from '../hooks/users';

const HomePage: FC = () => {
  const navigate = useNavigate();

  const [addBusFlag, setAddBusFlag] = useState(false);
  const [busName, setBusName] = useState('');

  if (localStorage.getItem('jwt') === null) navigate('/login');

  const { data } = useMe();

  const AddBus = () => {
    console.log('hoge');
  };

  return (
    <HomeTemplate
      addBusFlag={addBusFlag}
      busName={busName}
      setBusName={setBusName}
      setAddBusFlag={setAddBusFlag}
      addBus={AddBus}
      data={data}
    />
  );
};

export default HomePage;
