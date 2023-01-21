import { FC, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useQuery, useQueryClient } from 'react-query';

import HomeTemplate from '../components/templates/HomeTemplate';

import { useMe } from '../hooks/users';
import { useBusesCreate } from '../hooks/buses';
import { useGroupsUpdate } from '../hooks/groups';

const HomePage: FC = () => {
  const queryClient = useQueryClient();
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
    const data = {
      data: {
        name: busName,
      },
    };

    useBusesCreate(data).then((res) => {
      const buses = [];
      me.group.buses.forEach((bus: any) => {
        buses.push(bus.id);
      });
      buses.push(res.data.data.id);
      const data = {
        data: {
          buses,
        },
      };
      useGroupsUpdate(me.group.id, data);
      queryClient.invalidateQueries('me');
      setAddBusFlag(false);
    });
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
