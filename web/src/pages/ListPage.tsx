import { FC, useState } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { useQuery } from 'react-query';

import { ReactComponent as Plus } from '../assets/plus.svg';

import Header from '../components/organisms/Header';
import ListCard from '../components/atoms/ListCard';
import EmphasisButton from '../components/atoms/EmphasisButton';
import AddModal from '../components/organisms/AddModal';
import NFCModal from '../components/organisms/NFCModal';

import { useUsersFindWithFilterGroup, useMe, useUsersFindByFamily } from '../hooks/users';

const GroupListPage: FC = () => {
  const location = useLocation();
  const [AddModalView, setAddModalView] = useState(false);
  const [NFCModalView, setNFCModalView] = useState(false);
  const [name, setName] = useState('');

  const NFC = () => {
    if (me.family === null) return;
    localStorage.setItem('family', me.family.id);
  };

  if (location.state === null) return <Navigate to='/' />;

  const { data: me } = useQuery('me', () => useMe().then((res) => res.data));
  const { data: group } = useQuery('group', () =>
    useUsersFindWithFilterGroup(location.state.id).then((res) => res.data),
  );
  const { data: family } = useQuery('family', () => useUsersFindByFamily(location.state.id).then((res) => res.data));

  if (location.state.id === 'group') return <Navigate to='/group' />;
  if (location.state.id === 'family') return <Navigate to='/family' />;

  return (
    family &&
    group && (
      <>
        <Header driver={me.driver} title={me.driver ? '園児 一覧' : '家族 一覧'} />
        <div className='mt-32 w-full flex items-center justify-center pb-4 flex-col space-y-4'>
          {me.driver
            ? group.map(
                (user: any) =>
                  !user.driver && <ListCard key={user.id} name={user.displayname} createdAt={user.createdAt} />,
              )
            : family.map((user: any) => <ListCard key={user.id} name={user.displayname} createdAt={user.createdAt} />)}
          <button
            className='w-11/12 h-24 rounded-xl border-2 border-[#FBD579] flex items-center justify-center'
            onClick={() => setAddModalView(true)}
          >
            <Plus />
          </button>
        </div>
        <AddModal
          text={`お子様の名前を\n入力してください`}
          view={AddModalView}
          setView={setAddModalView}
          name={name}
          setName={setName}
          onClick={() => {
            setNFCModalView(true);
            NFC();
          }}
        />
        <NFCModal
          text={`お子様のカードを\nスキャンしてください`}
          view={NFCModalView}
          onClick={() => setNFCModalView(false)}
        />
      </>
    )
  );
};

export default GroupListPage;
