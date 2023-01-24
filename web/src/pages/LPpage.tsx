import { FC, useState } from 'react';

import LPTemplate from '../components/templates/LPTemplate';

const LPPage: FC = () => {
  const [page, setPage] = useState(1);

  const handleNextPage = () => {
    page !== 3 && setPage(page + 1);
  };

  const handlePrevPage = () => {
    page !== 1 && setPage(page - 1);
  };

  return <LPTemplate page={page} nextPage={handleNextPage} prevPage={handlePrevPage} />;
};

export default LPPage;
