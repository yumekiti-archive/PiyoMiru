import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import UsageTemplate from '../components/templates/UsageTemplate';

const UsagePage: FC = () => {
  const navigate = useNavigate();
  const [driver, setDriver] = useState(false);

  const decision = () => {
    navigate('/register', { state: { driver } });
  };

  return <UsageTemplate driver={driver} setDriver={setDriver} decision={decision} />;
};

export default UsagePage;
