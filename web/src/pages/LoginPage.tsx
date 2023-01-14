import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../libs/auth';

import LoginTemplate from '../components/templates/LoginTemplate';

const LoginPage: FC = () => {
  const navigate = useNavigate();

  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [errorsDetails, setErrorsDetails] = useState([]);

  const onClickLogin = (identifier: string, password: string) => {
    const body = {
      identifier: identifier,
      password: password,
    };

    login(body)
      .then((res) => {
        localStorage.setItem('jwt', res.data.jwt);
        navigate('/');
      })
      .catch((err) => {
        setErrorsDetails([]);
        setError(err.response.data.error.message);

        if (err.response.data.error.details.errors) {
          setErrorsDetails(err.response.data.error.details.errors);
        }
      });
  };

  return (
    <LoginTemplate
      identifier={identifier}
      password={password}
      error={error}
      errorsDetails={errorsDetails}

      setIdentifier={setIdentifier}
      setPassword={setPassword}

      onClickLogin={() => onClickLogin(identifier, password)}
    />
  );
};

export default LoginPage;
