import { useQuery } from 'react-query';
import { useMe } from './users';
import { useBusesFindOne } from '../hooks/buses';
import { useOperationsFind } from '../hooks/operations';
import { useUsersFindByFamily, useUsersFindWithFilterGroup, useUsersFindOne } from '../hooks/users';
import { usePassengersFind } from '../hooks/passengers';
import { useOperationsFindOne } from '../hooks/operations';

export const useRefresh = (queryClient: any) => {
  queryClient.invalidateQueries('me');
  queryClient.invalidateQueries('user');
  queryClient.invalidateQueries('bus');
  queryClient.invalidateQueries('operation');
};

export const useMeQuery = () => {
  return useQuery('me', () => useMe().then((res: any) => res.data));
};

export const useBusesFindOneQuery = (id: any) => {
  return useQuery('bus', () => useBusesFindOne(id).then((res) => res.data));
};

export const useOperationsFindQuery = (id: any) => {
  return useQuery('operation', () => useOperationsFind(id).then((res) => res.data));
};

export const useUsersFindWithFilterGroupQuery = (id: any) => {
  return useQuery('group', () => useUsersFindWithFilterGroup(id).then((res) => res.data));
};

export const useUsersFindByFamilyQuery = (id: any) => {
  return useQuery('family', () => useUsersFindByFamily(id).then((res) => res.data));
};

export const usePassengersFindQuery = (id: any) => {
  return useQuery('passengers', () => usePassengersFind(id).then((res) => res.data.data));
};

export const useOperationsFindOneQuery = (id: any) => {
  return useQuery('operation', () => useOperationsFindOne(id).then((res) => res.data.data));
};

export const useUsersFindOneQuery = (id: any) => {
  return useQuery('user', () => useUsersFindOne(id).then((res) => res.data));
};
