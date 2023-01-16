import { FC, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';

import BusTemplate from '../components/templates/BusTemplate';

import { useMe } from '../hooks/users';
import { useBusesFindOne, useBusesUpdate } from '../hooks/buses';
import { useOperationsCreate, useOperationsFind } from '../hooks/operations';

const BusPage: FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const { data } = useQuery('bus', () => useBusesFindOne(id).then((res) => res.data));
  const { data: user } = useQuery('user', () => useMe().then((res) => res.data));
  const { data: operation } = useQuery('operation', () => useOperationsFind(id).then((res) => {
    if (!res.data.data) return;
    return res.data.data[0]
  }));

  const [bus, setBus] = useState(data);
  const [latestOperation, setLatestOperation] = useState(operation);

  if (data && !bus) setBus(data);
  if (operation && !latestOperation) setLatestOperation(operation);
  
  const Start = () => {
    const body = {
      data: {
        status: !bus.attributes.status,
      },
    };

    useBusesUpdate(bus.id, body).then((res) => {
      setBus(res.data.data);
    });

    const operationBody = {
      data: {
        start: new Date(),
        bus: bus.id,
      },
    };
    useOperationsCreate(operationBody).then((res) => {
      setLatestOperation(res.data.data);
    });
  };

  const List = () => {
    navigate(`/list/${latestOperation.id}`);
  };

  return data && user && <BusTemplate data={bus} user={user} onClickStart={Start} onClickList={List} />;
};

export default BusPage;
