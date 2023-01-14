import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import HomeTemplate from '../components/templates/HomeTemplate';

import { userState } from '../recoil/atoms';
import { useMe } from '../libs/users';

const HomePage: FC = () => {
  const navigate = useNavigate();
  const [addBusFlag, setAddBusFlag] = useState(false);
  const [busName, setBusName] = useState('');
  const [user, setUser] = useRecoilState(userState);
  const { data, error, isLoading } = useMe();

  const ChangeAddBusFlag = () => {
    setAddBusFlag(!addBusFlag);
  };

  const AddBus = () => {
    console.log('hoge');
  };

  useEffect(() => {
    if (localStorage.getItem('jwt') === null) {
      navigate('/login');
    }
    if (error) localStorage.removeItem('jwt');
    if (!data) return;
    setUser(data);
  }, [data, error]);

  return (
    <HomeTemplate
      addBusFlag={addBusFlag}
      busName={busName}
      setBusName={setBusName}
      setAddBusFlag={ChangeAddBusFlag}
      addBus={AddBus}

      data={data}
    />
  );
};

export default HomePage;
