import { FC, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useRecoilValue, useRecoilState } from 'recoil';

import BusTemplate from '../components/templates/BusTemplate';

import { useBusesFindOne, useBusesUpdate } from '../libs/buses';
import { userState, busState } from '../recoil/atoms';

const BusPage: FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { data, error, isLoading } = useBusesFindOne(id);
  const [bus, setBus] = useRecoilState(busState);
  const [user, setUser] = useRecoilState(userState);

  useEffect(() => {
    if (!user) navigate('/');
    if (!data) return;
    setBus(data.data);
  }, [data]);

  const HandleStart = () => {
    const body = {
      data: {
        status: !bus.attributes.status,
      },
    };

    useBusesUpdate(bus.id, body).then((res) => {
      setBus(res.data.data);
    });
  };

  return (
    <BusTemplate
      data={bus}
      user={user}
      onClickStart={HandleStart}
    />
  );
};

export default BusPage;
