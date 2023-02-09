import { FC, useState } from 'react';
import { useLocation, Navigate } from 'react-router-dom';

import { ReactComponent as Plus } from '../assets/plus.svg';

import Header from '../components/organisms/Header';
import ListCard from '../components/atoms/ListCard';
import NFCModal from '../components/organisms/NFCModal';

import { useMeQuery, useUsersFindWithFilterGroupQuery, useUsersFindByFamilyQuery } from '../hooks/queries';

const GroupListPage: FC = () => {
  const location = useLocation();
  const [NFCModalView, setNFCModalView] = useState(false);
  // const [AddModalView, setAddModalView] = useState(false);
  // const [name, setName] = useState('');

  const NFC = () => {
    if (me.driver) localStorage.setItem('group', me.group.id);
    else localStorage.setItem('family', me.family.id);
  };

  if (location.state === null) return <Navigate to='/' />;

  const { data: me } = useMeQuery();
  const { data: group } = useUsersFindWithFilterGroupQuery(location.state.id);
  const { data: family } = useUsersFindByFamilyQuery(location.state.id);

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
            onClick={() => {
              setNFCModalView(true)
              NFC();
            }}
          >
            <Plus />
          </button>
        </div>
        {/* <AddModal
          text={`お子様の名前を\n入力してください`}
          view={AddModalView}
          setView={setAddModalView}
          name={name}
          setName={setName}
          onClick={() => {
            setNFCModalView(true);
            NFC();
          }}
        /> */}
        <NFCModal
          text={`お子様のカードを\nスキャンしてください`}
          view={NFCModalView}
          onClick={() => {
            setNFCModalView(false);
          }}
        />
      </>
    )
  );
};

export default GroupListPage;
