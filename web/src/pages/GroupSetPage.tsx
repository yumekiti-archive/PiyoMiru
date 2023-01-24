import { FC } from 'react';
import { Navigate, useParams, useNavigate } from 'react-router-dom';

import { useUsersUpdateOne } from '../hooks/users';
import { useMeQuery } from '../hooks/queries';

const GroupSetPage: FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { data: me } = useMeQuery();

  if (!me) return <></>;
  if (me.driver) return <Navigate to='/' />;

  const data = {
    group: me.group.id,
  };

  useUsersUpdateOne(id, data).then((res) => {
    navigate('/list', { state: { id: me.group.id } });
  });

  return <Navigate to='/' />;
};

export default GroupSetPage;
