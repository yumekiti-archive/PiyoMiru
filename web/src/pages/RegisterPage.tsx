import { FC, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import RegisterTemplate from '../components/templates/RegisterTemplate';
import { register } from '../libs/auth';

const RegisterPage: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [driver, setDriver] = useState(location.state?.driver || false);
  const [username, setUsername] = useState('');
  const [displayname, setDisplayname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const [nextFlag, setNextFlag] = useState(false);
  const [error, setError] = useState('');
  const [errorDetails, setErrorsDetails] = useState([]);

  const onClickRegister = () => {
    const body = {
      username: username,
      displayname: displayname,
      email: email,
      password: password,
      driver: driver,
    };

    register(body)
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
    <RegisterTemplate
      username={username}
      displayname={displayname}
      email={email}
      password={password}
      passwordConfirmation={passwordConfirmation}
      setUsername={setUsername}
      setDisplayname={setDisplayname}
      setEmail={setEmail}
      setPassword={setPassword}
      setPasswordConfirmation={setPasswordConfirmation}
      nextFlag={nextFlag}
      setNextFlag={setNextFlag}
      error={error}
      errorDetails={errorDetails}
      onClickRegister={onClickRegister}
    />
  );
};

export default RegisterPage;
