import { FC, useState } from 'react';

import LPTemplate from '../components/templates/LPTemplate';

const LPPage: FC = () => {
  const [page, setPage] = useState(1);

  const nextPage = () => {
    page !== 3 && setPage(page + 1);
  };

  const prevPage = () => {
    page !== 1 && setPage(page - 1);
  };

  return <LPTemplate page={page} nextPage={nextPage} prevPage={prevPage} />;
};

export default LPPage;
