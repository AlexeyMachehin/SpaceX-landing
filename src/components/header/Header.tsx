import classes from './header.module.css';

export function Header() {
  return (
    <header className={classes.wrapper}>
      <div className={`container ${classes.headerContentContainer}`}>
        <button className={classes.logoButton}>
          <img
            className={classes.logo}
            src="/spaceX-logo.png"
            alt="SpaceX-logo"
          />
        </button>

        <nav className={classes.links}>
          <a className={classes.link} href="#">
            Главная
          </a>
          <a className={classes.link} href="#">
            Технология
          </a>
          <a className={classes.link} href="#">
            График полетов
          </a>
          <a className={classes.link} href="#">
            Гарантии
          </a>
          <a className={classes.link} href="#">
            О компании
          </a>
          <a className={classes.link} href="#">
            Контакты
          </a>
        </nav>
      </div>
    </header>
  );
}
