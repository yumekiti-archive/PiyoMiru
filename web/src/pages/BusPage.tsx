import { FC, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery, useQueryClient } from 'react-query';

import BusTemplate from '../components/templates/BusTemplate';

import { useMe } from '../hooks/users';
import { useBusesFindOne, useBusesUpdate } from '../hooks/buses';
import { useOperationsCreate, useOperationsFind } from '../hooks/operations';

const BusPage: FC = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { id } = useParams<{ id: string }>();

  const { data: bus } = useQuery('bus', () => useBusesFindOne(id).then((res) => res.data));
  const { data: user } = useQuery('user', () => useMe().then((res) => res.data));
  const { data: operation } = useQuery('operation', () =>
    useOperationsFind(id).then((res) => {
      if (!res.data.data) return;
      return res.data.data[0];
    }),
  );

  const Start = () => {
    const body = {
      data: {
        status: !bus.attributes.status,
      },
    };

    useBusesUpdate(bus.id, body).then((res) => {
      queryClient.invalidateQueries('bus');
    });

    const operationBody = {
      data: {
        start: new Date(),
        bus: bus.id,
      },
    };
    useOperationsCreate(operationBody).then((res) => {
      queryClient.invalidateQueries('operation');
    });
  };

  const List = () => {
    navigate(`/list/${operation.id}`);
  };

  const NFC = () => {
    localStorage.setItem('bus', bus.id);
  };

  return bus && user && <BusTemplate data={bus} user={user} onClickStart={Start} onClickList={List} onClickNFC={NFC} />;
};

export default BusPage;
