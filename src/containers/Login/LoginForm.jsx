import React, { useState, useEffect } from 'react';
import { loginUser, clearAuth } from '../../redux/actions/authAction';

import { DefaultInput } from '../../components/Inputs/Inputs';
import { DefaultButton } from '../../components/Buttons/Buttons';
import { useDispatch, useSelector } from 'react-redux';
import { DefaultSpinner } from '../../assets/icon';
import { DefaultErorr } from '../../components/FormError/FormError';
function LoginForm() {
  const dispatch = useDispatch();
  const authAction = useSelector(state => state.user);
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const _onSubmit = e => {
    setLoading(true);
    e.preventDefault();
    dispatch(loginUser({ email, setLoading }));
  };
  useEffect(() => {
    dispatch(clearAuth());
  }, [dispatch]);
  return (
    <>
      <form onSubmit={_onSubmit}>
        <DefaultInput
          title="Email"
          type="email"
          value={email}
          onChange={setEmail}
          autoFocus
        />
        {authAction.error?.length > 0 ? (
          <DefaultErorr errorName="Kullanıcı Adı Hatalı" />
        ) : null}

        <DefaultButton
          text="Giriş Yap"
          styles={{ backgroundColor: '#0E71BF' }}
          loadingIcon={() => <DefaultSpinner />}
          loading={loading}
        />
      </form>
    </>
  );
}

export default LoginForm;
