import { FC, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Header from '../components/organisms/Header';
import ListCard from '../components/atoms/ListCard';

import { usePassenger } from '../libs/users';

const ListPage: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const { data, error, isLoading } = usePassenger(id);

  useEffect(() => {
    if (!location.state) navigate('/');
    else setId(location.state.id);
  }, []);

  return (
    data && (
      <>
        <Header title='乗車中園児 一覧' />
        <div className='mt-32 w-full flex items-center justify-center pb-4 flex-col space-y-4'>
          {data.map(
            (item: any) =>
              item.passenger && <ListCard key={item.id} name={item.displayname} createdAt={item.createdAt} />,
          )}
        </div>
      </>
    )
  );
};

export default ListPage;
