import { FC } from 'react';
import { Navigate, useParams, useNavigate } from 'react-router-dom';
import { useQueryClient } from 'react-query';

import { useUsersUpdateOne } from '../hooks/users';
import { useMeQuery, useRefresh } from '../hooks/queries';

const GroupSetPage: FC = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { id } = useParams<{ id: string }>();
  const { data: me } = useMeQuery();

  if (!me) return <></>;
  if (me && !me.driver) return <Navigate to='/' />;

  useUsersUpdateOne(id, { group: me.group.id }).then(() => {
    useRefresh(queryClient);
    navigate('/list', { state: { id: me.group.id } });
  });

  return <></>;
  // return <Navigate to='/' />;
};

export default GroupSetPage;
