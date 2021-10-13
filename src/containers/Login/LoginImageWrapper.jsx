import style from './login.module.scss';
import image from '../../assets/img/home-head-background-3.jpg';

function LoginImageWrapper() {
  return (
    <>
      <div className={style.imageWrapper}>
        <img className={style.cover} src={image} alt="cover" />
        <div className={style.imageCover}></div>
      </div>
    </>
  );
}

export default LoginImageWrapper;
