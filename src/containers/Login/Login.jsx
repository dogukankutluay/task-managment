import style from './login.module.scss';
import LoginForm from './LoginForm';
import LoginImageWrapper from './LoginImageWrapper';
const Login = () => {
  document.title="Giriş Yap"
  return (
    <div className={style.login}>
      <LoginForm />
      <LoginImageWrapper />
    </div>
  );
};

export default Login;
