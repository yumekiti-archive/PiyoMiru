import { FC } from 'react';

interface Props {
  name: string;
  status: boolean;
}

const BusStatus: FC<Props> = ({ name, status }) => {
  return (
    <div className='text-4xl font-bold'>
      {name}
      {status ? '運行中...' : '停車中'}
    </div>
  );
};

export default BusStatus;
