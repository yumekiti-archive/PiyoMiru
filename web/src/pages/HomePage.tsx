import { FC, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useQueryClient } from 'react-query';

import HomeTemplate from '../components/templates/HomeTemplate';

import { useBusesCreate } from '../hooks/buses';
import { useGroupsUpdate } from '../hooks/groups';
import { useMeQuery, useRefresh } from '../hooks/queries';

const HomePage: FC = () => {
  const queryClient = useQueryClient();
  localStorage.removeItem('bus');
  localStorage.removeItem('family');
  localStorage.removeItem('group');

  const { data: me, error } = useMeQuery();
  const [addBusFlag, setAddBusFlag] = useState(false);
  const [busName, setBusName] = useState('');

  if (error) return <Navigate to='/login' />;

  const handleAddBus = async () => {
    const { data: bus } = await useBusesCreate({ data: { name: busName } });
    const buses = [...me.group.buses.map((bus: any) => bus.id), bus.data.id];
    useGroupsUpdate(me.group.id, { data: { buses } });
    useRefresh(queryClient);
    setAddBusFlag(false);
  };

  return (
    me && (
      <HomeTemplate
        addBusFlag={addBusFlag}
        busName={busName}
        setBusName={setBusName}
        setAddBusFlag={setAddBusFlag}
        addBus={handleAddBus}
        data={me}
      />
    )
  );
};

export default HomePage;
