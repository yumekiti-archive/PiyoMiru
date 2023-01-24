import { FC, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useQueryClient } from 'react-query';

import HomeTemplate from '../components/templates/HomeTemplate';

import { useBusesCreate } from '../hooks/buses';
import { useGroupsUpdate } from '../hooks/groups';
import { useMeQuery, useRefresh } from '../hooks/queries';

const HomePage: FC = () => {
  const queryClient = useQueryClient();
  if (localStorage.getItem('jwt') === null) return <Navigate to='/login' />;
  localStorage.removeItem('bus');
  localStorage.removeItem('family');
  localStorage.removeItem('group');

  // TODO: 401の時にログインページに飛ばす
  const { data: me } = useMeQuery();
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
      useRefresh(queryClient);
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
