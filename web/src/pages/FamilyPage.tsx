import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import FormText from '../components/atoms/FormText';
import Header from '../components/organisms/Header';
import Button from '../components/atoms/Button';

import { useFamiliesCreate } from '../hooks/families';
import { useUsersUpdateOne } from '../hooks/users';
import { useMeQuery } from '../hooks/queries';

const FamilyPage: FC = () => {
  const navigate = useNavigate();
  const [familyName, setFamilyName] = useState('');
  const { data: me } = useMeQuery();

  const handleSubmit = async () => {
    const { data: newFamily } = await useFamiliesCreate({ data: { name: familyName } });
    await useUsersUpdateOne(me.id, { family: newFamily.data.id });
    navigate('/list', { state: { id: newFamily.data.id } });
  };

  return (
    <div className='h-screen bg-[#FBD579] w-full'>
      <div className='h-1/6'>
        <Header title='' />
      </div>
      <div className='h-3/6 flex justify-start flex-col items-center space-y-4 pt-10'>
        <p className='text-2xl'>---&ensp;家族新規登録&ensp;---</p>
        <div className='w-10/12 flex justify-center'>
          <FormText icon={true} label='家族名' value={familyName} onChange={(e) => setFamilyName(e.target.value)} />
        </div>
      </div>
      <div className='h-2/6 w-full flex items-center justify-center'>
        <div className='w-10/12 h-16'>
          <Button text='とうろく' onClick={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default FamilyPage;
