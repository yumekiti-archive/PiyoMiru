import { FC, useState } from 'react';

import FormText from '../components/atoms/FormText';
import Header from '../components/organisms/Header';
import Button from '../components/atoms/Button';

const GroupPage: FC = () => {
  const [groupname, setGroupname] = useState('');

  const Register = () => {
    console.log('register');
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
