import { FC, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useQuery } from 'react-query';

import HomeTemplate from '../components/templates/HomeTemplate';

import { useMe } from '../hooks/users';

const HomePage: FC = () => {
  if (localStorage.getItem('jwt') === null) return <Navigate to='/login' />;
  const { data } = useQuery('me', () => useMe().then((res) => res.data));

  const [addBusFlag, setAddBusFlag] = useState(false);
  const [busName, setBusName] = useState('');
  const AddBus = () => {
    console.log('hoge');
  };

  return (
    data && (
      <HomeTemplate
        addBusFlag={addBusFlag}
        busName={busName}
        setBusName={setBusName}
        setAddBusFlag={setAddBusFlag}
        addBus={AddBus}
        data={data}
      />
    )
  );
};

export default HomePage;
