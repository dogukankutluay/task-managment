import style from './login.module.scss';
import image from '../../assets/img/home-head-background-3.jpg';
import logo from '../../assets/img/logo.png';

function LoginImageWrapper() {
  return (
    <>
      <div className={style.imageWrapper}>
        <img className={style.cover} src={image} alt="cover" />
        <img className={style.logo} src={logo} alt="logo" />
        <div className={style.imageCover}></div>
      </div>
    </>
  );
}

export default LoginImageWrapper;
