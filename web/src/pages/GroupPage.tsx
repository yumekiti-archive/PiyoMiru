import { FC, useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

import FormText from '../components/atoms/FormText';
import Header from '../components/organisms/Header';
import Button from '../components/atoms/Button';

import { useUsersUpdateOne } from '../hooks/users';
import { useGroupsFindOne } from '../hooks/groups';
import { useMe } from '../hooks/users';

const GroupPage: FC = () => {
  const navigate = useNavigate();
  const [groupname, setGroupname] = useState('');
  const [error, setError] = useState(false);

  const { data: me } = useQuery('me', () => useMe().then((res) => res.data));

  const Register = () => {
    useGroupsFindOne(groupname).then((res) => {
      if (!res.data.data.length) {
        setError(true);
        return;
      }
      setError(false);

      const data = {
        group: res.data.data[0].id,
      };

      useUsersUpdateOne(me.id, data);

      navigate('/');
    });
  };

  return (
    <div className='h-screen bg-[#FBD579] w-full'>
      <div className='h-1/6'>
        <Header title='' />
      </div>
      <div className='h-3/6 flex justify-start flex-col items-center space-y-4 pt-10'>
        <p className='text-2xl'>---&ensp;所属情報登録&ensp;---</p>
        <div className='w-10/12 flex justify-center'>
          <FormText icon={true} label='所属ID' value={groupname} onChange={(e) => setGroupname(e.target.value)} />
        </div>
        {error && <p className='text-red-500'>所属IDが間違っています</p>}
      </div>
      <div className='h-2/6 w-full flex items-center justify-center'>
        <div className='w-10/12 h-16'>
          <Button text='とうろく' onClick={Register} />
        </div>
      </div>
    </div>
  );
};

export default GroupPage;
