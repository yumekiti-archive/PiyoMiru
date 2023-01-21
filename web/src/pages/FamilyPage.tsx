import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';

import FormText from '../components/atoms/FormText';
import Header from '../components/organisms/Header';
import Button from '../components/atoms/Button';

import { useFamiliesCreate } from '../hooks/families';
import { useMe, useUsersUpdateOne } from '../hooks/users';

const FamilyPage: FC = () => {
  const navigate = useNavigate();
  const [name, setGroupname] = useState('');
  const { data: me } = useQuery('me', () => useMe().then((res) => res.data));

  const Register = () => {
    const data = {
      family: name,
    };
    useFamiliesCreate(data).then((res) => {
      const data = {
        family: res.data.id,
      };
      useUsersUpdateOne(me.id, data).then((res) => {
        navigate('/list', { state: { id: res.data.family.id } });
      });
    });
  };

  return (
    <div className='h-screen bg-[#FBD579] w-full'>
      <div className='h-1/6'>
        <Header title='' />
      </div>
      <div className='h-3/6 flex justify-start flex-col items-center space-y-4 pt-10'>
        <p className='text-2xl'>---&ensp;家族新規登録&ensp;---</p>
        <div className='w-10/12 flex justify-center'>
          <FormText icon={true} label='家族名' value={name} onChange={(e) => setGroupname(e.target.value)} />
        </div>
      </div>
      <div className='h-2/6 w-full flex items-center justify-center'>
        <div className='w-10/12 h-16'>
          <Button text='とうろく' onClick={Register} />
        </div>
      </div>
    </div>
  );
};

export default FamilyPage;