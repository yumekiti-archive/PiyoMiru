import { FC } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { useQuery } from 'react-query';

import { ReactComponent as Plus } from '../assets/plus.svg';

import Header from '../components/organisms/Header';
import ListCard from '../components/atoms/ListCard';
import EmphasisButton from '../components/atoms/EmphasisButton';

import { useUsersFindWithFilterGroup } from '../hooks/users';

const GroupListPage: FC = () => {
  const location = useLocation();

  if (location.state === null) return <Navigate to='/' />;

  const { data } = useQuery('group', () => useUsersFindWithFilterGroup(location.state.id).then((res) => res.data));

  if (location.state.id === '0') return <Navigate to='/group' />;

  return (
    data && (
      <>
        <Header title='乗車中園児 一覧' />
        <div className='mt-32 w-full flex items-center justify-center pb-4 flex-col space-y-4'>
          {data.map(
            (user: any) =>
              !user.driver && <ListCard key={user.id} name={user.displayname} createdAt={user.createdAt} />,
          )}
          <button className='w-11/12 h-24 rounded-xl border-2 border-[#FBD579] flex items-center justify-center'>
            <Plus />
          </button>
        </div>
      </>
    )
  );
};

export default GroupListPage;
