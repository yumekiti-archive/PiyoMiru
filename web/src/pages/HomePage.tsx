import { FC, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';

import HomeTemplate from '../components/templates/HomeTemplate';

import { useMe } from '../hooks/users';

const HomePage: FC = () => {
  const navigate = useNavigate();
  if (localStorage.getItem('jwt') === null) return <Navigate to='/login' />;
  localStorage.removeItem('bus');
  localStorage.removeItem('family');
  localStorage.removeItem('group');

  const { data: me, error } = useQuery('me', () =>
    useMe()
      .then((res) => res.data)
      .catch((err) => {
        if (err.response.status === 401) {
          navigate('/login');
        }
      }),
  );
  const [addBusFlag, setAddBusFlag] = useState(false);
  const [busName, setBusName] = useState('');

  const AddBus = () => {
    console.log('hoge');
  };

  return (
    me && (
      <HomeTemplate
        addBusFlag={addBusFlag}
        busName={busName}
        setBusName={setBusName}
        setAddBusFlag={setAddBusFlag}
        addBus={AddBus}
        data={me}
      />
    )
  );
};

export default HomePage;
