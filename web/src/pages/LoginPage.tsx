import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLogin } from '../hooks/auth';

import LoginTemplate from '../components/templates/LoginTemplate';

const LoginPage: FC = () => {
  const navigate = useNavigate();

  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [errorDetails, setErrorsDetails] = useState([]);

  const Login = (identifier: string, password: string) => {
    const body = {
      identifier: identifier,
      password: password,
    };

    useLogin(body)
      .then((res) => {
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
      errorDetails={errorDetails}
      setIdentifier={setIdentifier}
      setPassword={setPassword}
      onClickLogin={() => Login(identifier, password)}
    />
  );
};

export default LoginPage;
