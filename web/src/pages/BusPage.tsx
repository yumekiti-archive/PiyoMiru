import { FC } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQueryClient } from 'react-query';
import socket from '../libs/socket';
import { useMeQuery, useBusesFindOneQuery, useOperationsFindQuery, useRefresh } from '../hooks/queries';

import BusTemplate from '../components/templates/BusTemplate';

import { useBusesUpdate } from '../hooks/buses';
import { useOperationsCreate } from '../hooks/operations';

const BusPage: FC = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { id } = useParams<{ id: string }>();

  const { data: bus } = useBusesFindOneQuery(id);
  const { data: me } = useMeQuery();
  const { data: operation } = useOperationsFindQuery(id);

  const handleStart = async () => {
    socket.emit('start', me.group.id);

    const body = {
      data: {
        status: !bus.attributes.status,
      },
    };
    useBusesUpdate(bus.id, body);
    useRefresh(queryClient);

    const operationBody = {
      data: {
        start: new Date(),
        bus: bus.id,
      },
    };
    useOperationsCreate(operationBody);
    useRefresh(queryClient);
  };

  const handleList = () => {
    navigate(`/list/${operation.data[0].id}`);
  };

  const handleNFC = () => {
    localStorage.setItem('bus', bus.id);
  };

  return (
    bus &&
    me && (
      <BusTemplate data={bus} user={me} onClickStart={handleStart} onClickList={handleList} onClickNFC={handleNFC} />
    )
  );
};

export default BusPage;
