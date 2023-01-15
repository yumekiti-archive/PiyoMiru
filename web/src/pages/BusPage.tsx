import { FC, useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useRecoilValue, useRecoilState } from 'recoil';

import BusTemplate from '../components/templates/BusTemplate';

import { useBusesFindOne, useBusesUpdate } from '../libs/buses';
import { userState } from '../recoil/atoms';

const BusPage: FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { data, error, isLoading } = useBusesFindOne(id);
  const [bus, setBus] = useState(data);
  // const [user, setUser] = useRecoilState(userState);
  const user = useRecoilValue(userState);

  useEffect(() => {
    if (!user) navigate('/');
    if (!data) return;
    setBus(data);
  }, [data]);

  const BusUpdate = () => {
    const body = {
      data: {
        status: !data.data.attributes.status,
      },
    };

    useBusesUpdate(data.data.id, body).then((res) => {
      setBus(res.data);
    });
  };

  return <BusTemplate data={bus} user={user} onClickStart={BusUpdate} />;
};

export default BusPage;
