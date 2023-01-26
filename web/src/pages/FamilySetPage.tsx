import { FC } from 'react';
import { Navigate, useParams, useNavigate } from 'react-router-dom';
import { useQueryClient } from 'react-query';

import { useUsersUpdateOne } from '../hooks/users';
import { useMeQuery, useRefresh } from '../hooks/queries';

const FamilySetPage: FC = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { id } = useParams<{ id: string }>();
  const { data: me } = useMeQuery();

  if (!me) return <></>;
  if (me.driver) return <Navigate to='/' />;

  useUsersUpdateOne(id, { family: me.family.id }).then(() => {
    navigate('/list', { state: { id: me.family.id } });
    useRefresh(queryClient);
  });

  return <></>;
  // return <Navigate to='/' />;
};

export default FamilySetPage;
