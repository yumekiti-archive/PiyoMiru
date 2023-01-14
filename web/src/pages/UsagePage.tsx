import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import UsageTemplate from '../components/templates/UsageTemplate';

const UsagePage: FC = () => {
  const navigate = useNavigate();
  const decision = () => {
    navigate('/register', { state: { manager } });
  };

  const [manager, setManager] = useState(false);

  return <UsageTemplate manager={manager} setManager={setManager} decision={decision} />;
};

export default UsagePage;
