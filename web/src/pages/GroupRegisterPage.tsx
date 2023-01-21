import { FC, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useQuery } from 'react-query';

import FormText from '../components/atoms/FormText';
import Header from '../components/organisms/Header';
import Button from '../components/atoms/Button';

import { useGroupsCreate } from '../hooks/groups';
import { useMe, useUsersUpdateOne } from '../hooks/users';

const GroupRegisterPage: FC = () => {
  const navigate = useNavigate();
  const [groupname, setGroupname] = useState('');
  const [displayname, setDisplayname] = useState('');
  const [address, setAddress] = useState('');

  const { data: me } = useQuery('me', () => useMe().then((res) => res.data));

  const Register = () => {
    const data = {
      data: {
        groupname: groupname,
        displayname: displayname,
        address: address,
      },
    };

    useGroupsCreate(data).then((res) => {
      useUsersUpdateOne(me.id, { group: res.data.data.id });
      navigate('/');
    });
  };

  return (
    <div className='h-screen bg-[#FBD579] w-full'>
      <div className='h-1/6'>
        <Header title='' />
      </div>
      <div className='h-3/6 flex justify-start flex-col items-center space-y-4 pt-10'>
        <p className='text-2xl'>---&ensp;所属登録&ensp;---</p>
        <div className='w-10/12 flex justify-center'>
          <FormText icon={true} label='所属名' value={displayname} onChange={(e) => setDisplayname(e.target.value)} />
        </div>
        <div className='w-10/12 flex justify-center'>
          <FormText label='住所' value={address} onChange={(e) => setAddress(e.target.value)} />
        </div>
        <div className='w-10/12 flex justify-center'>
          <FormText label='所属ID' value={groupname} onChange={(e) => setGroupname(e.target.value)} />
        </div>
      </div>
      <div className='h-2/6 w-full flex items-center justify-center flex-col'>
        <div className='w-10/12 h-16'>
          <Button text='とうろく' onClick={Register} />
        </div>
      </div>
    </div>
  );
};

export default GroupRegisterPage;
