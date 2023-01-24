import { FC } from 'react';
import { useParams, Navigate } from 'react-router-dom';

const ScanPage: FC = () => {
  const { id } = useParams<{ id: string }>();

  const bus = localStorage.getItem('bus');
  const family = localStorage.getItem('family');
  const group = localStorage.getItem('group');

  if (bus !== null) return <Navigate to={`/ride/${id}`} />;
  if (family !== null) return <Navigate to={`/family/${id}`} />;
  if (group !== null) return <Navigate to={`/group/${id}`} />;

  return <></>;
  // return <Navigate to='/' />;
};

export default ScanPage;
