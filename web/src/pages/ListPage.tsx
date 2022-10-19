import { FC } from 'react';
import Header from '../components/Header';
import ListCard from '../components/atoms/ListCard';

const ListPage: FC = () => {
  return (
    <>
      <Header title="乗車中園児 一覧" />
      <div className="w-full flex items-center justify-center mt-6 flex-col space-y-4">
        <ListCard />
        <ListCard />
        <ListCard />
        <ListCard />
        <ListCard />
        <ListCard />
        <ListCard />
        <ListCard />
        <ListCard />
        <ListCard />
      </div>
    </>
  );
}

export default ListPage;