import classes from './main.module.css';

export function Main() {
  return (
    <main className={classes.mainWrapper}>
      <div className="container">
        <div className={classes.mainContentWrapper}>
          <div className={classes.mainContent}>
            <div className={classes.journey}>
              <span className={classes.journeyUppercase}>ПУТЕШЕСТВИЕ</span>
              <span className={classes.journeyLowercase}>
                на красную планету
              </span>
            </div>

            <div className={classes.cards}>
              <div className={`${classes.card} ${classes.rightBottomGradient}`}>
                <span className={classes.cardTextSecondary}>мы</span>
                <span className={classes.cardTextPrimary}>1</span>
                <span className={classes.cardTextSecondary}>на рынке</span>
              </div>
              <div className={`${classes.card} ${classes.leftBottomGradient}`}>
                <span className={classes.cardTextSecondary}>гарантируем</span>
                <span
                  className={`${classes.cardTextPrimary} ${classes.cardTextPrimaryGrey}`}>
                  50%
                </span>
                <span className={classes.cardTextSecondary}>безопасность</span>
              </div>
              <div className={`${classes.card} ${classes.rightTopGradient}`}>
                <span className={classes.cardTextSecondary}>календарик за</span>
                <span className={classes.cardTextPrimary}>2001Г.</span>
                <span className={classes.cardTextSecondary}>в подарок</span>
              </div>
              <div className={`${classes.card} ${classes.leftTopGradient}`}>
                <span className={classes.cardTextSecondary}>путешествие</span>
                <span
                  className={`${classes.cardTextPrimary} ${classes.cardTextPrimaryGrey}`}>
                  597
                </span>
                <span className={classes.cardTextSecondary}>дней</span>
              </div>
            </div>

            <div className={classes.startJourney}>
              <div className={classes.button}>
                <div className={classes.borderOne} />
                <div className={classes.lineOne} />
                <p>Начать путешествие</p>
                <div className={classes.borderTwo} />
                <div className={classes.lineTwo} />
              </div>

              <div className={classes.arrowHorizontal}></div>
              <div className={classes.arrowAngle}></div>
              <div className={classes.rocket}></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
