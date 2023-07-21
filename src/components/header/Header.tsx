import { Navigation } from '../navigation/Navigation';
import classes from './header.module.css';

export function Header() {
  return (
    <header className={classes.wrapper}>
      <div className="container">
        <div className={classes.contentContainer}>
          <button className={classes.logoButton}>
            <img
              className={classes.logo}
              src="/spaceX-logo.png"
              alt="SpaceX-logo"
            />
          </button>

          <Navigation />
        </div>
      </div>
    </header>
  );
}
