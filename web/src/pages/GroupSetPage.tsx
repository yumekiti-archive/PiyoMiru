import { FC } from 'react';
import { useQuery } from 'react-query';
import { Navigate, useParams, useNavigate } from 'react-router-dom';

import { useMe, useUsersUpdateOne } from '../hooks/users';

const GroupSetPage: FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { data: me } = useQuery('me', () => useMe().then((res) => res.data));

  if (!me) return <></>;
  if (me.driver) return <Navigate to='/' />;

  console.log(me);
  const data = {
    group: me.group.id,
  };

  useUsersUpdateOne(id, data).then((res) => {
    navigate('/list', { state: { id: me.group.id } });
  });

  return <></>;
};

export default GroupSetPage;