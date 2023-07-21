import { Header } from '../header/Header';
import { Main } from '../main/Main';
import classes from './spaceXLanding.module.css';

export function SpaceXLanding() {
  return (
    <div className={classes.wrapper}>
      <Header />
      <Main />
    </div>
  );
}
