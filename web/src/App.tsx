import { FC } from 'react';
import Loading from './components/Loading';

const App: FC = () => {
  return (
    <>
      <Loading />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
}

export default App;