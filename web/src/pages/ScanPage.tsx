import { FC, useState } from 'react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';

const ScanPage: FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const bus = localStorage.getItem('bus');
  const family = localStorage.getItem('family');

  if (bus !== null) return <Navigate to={`/ride/${id}`} />;
  if (family !== null) return <Navigate to={`/family/${id}`} />;

  return <></>;
  // return <Navigate to='/' />;
};

export default ScanPage;
