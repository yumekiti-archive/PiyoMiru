import { FC, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import RegisterTemplate from '../components/templates/RegisterTemplate';
import { useRegister } from '../hooks/auth';

const RegisterPage: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [displayname, setDisplayname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const [nextFlag, setNextFlag] = useState(false);
  const [error, setError] = useState('');
  const [errorDetails, setErrorsDetails] = useState([]);

  const Register = () => {
    const body = {
      username: username,
      displayname: displayname,
      email: email,
      password: password,
      driver: location.state?.driver,
    };

    useRegister(body)
      .then(() => {
        navigate('/group');
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
      onClickRegister={Register}
    />
  );
};

export default RegisterPage;
