import classes from './main.module.css';
import classesStartJourney from './startJourney.module.css';
import classesStartJourneyButton from './startJourneyButton.module.css';
import classesJourney from './journey.module.css';
import classesCards from './cards.module.css';

export function Main() {
  return (
    <main className={classes.wrapper}>
      <div className="container">
        <div className={classes.mainContentWrapper}>
          <div className={classes.mainContent}>
            <div className={classesJourney.journey}>
              <span className={classesJourney.journeyTextUppercase}>
                ПУТЕШЕСТВИЕ
              </span>
              <span className={classesJourney.journeyTextLowercase}>
                на красную планету
              </span>
            </div>

            <div className={classesCards.cards}>
              <div
                className={`${classesCards.card} ${classesCards.topLeftCard}`}>
                <span className={classesCards.cardTextSecondary}>мы</span>
                <span className={classesCards.cardTextPrimary}>1</span>
                <span className={classesCards.cardTextSecondary}>на рынке</span>
              </div>

              <div
                className={`${classesCards.card} ${classesCards.topRightCard}`}>
                <span className={classesCards.cardTextSecondary}>
                  гарантируем
                </span>
                <span
                  className={`${classesCards.cardTextPrimary} ${classesCards.cardTextPrimaryDarkened}`}>
                  50%
                </span>
                <span className={classesCards.cardTextSecondary}>
                  безопасность
                </span>
              </div>

              <div
                className={`${classesCards.card} ${classesCards.bottomLeftCard}`}>
                <span className={classesCards.cardTextSecondary}>
                  календарик за
                </span>
                <span className={classesCards.cardTextPrimary}>
                  2001<span className={classesCards.yearAbbreviation}>Г.</span>
                </span>
                <span className={classesCards.cardTextSecondary}>
                  в подарок
                </span>
              </div>

              <div
                className={`${classesCards.card} ${classesCards.bottomRightCard}`}>
                <span className={classesCards.cardTextSecondary}>
                  путешествие
                </span>
                <span
                  className={`${classesCards.cardTextPrimary} ${classesCards.cardTextPrimaryDarkened}`}>
                  597
                </span>
                <span className={classesCards.cardTextSecondary}>дней</span>
              </div>
            </div>

            <div className={classesStartJourney.startJourney}>
              <div className={classesStartJourneyButton.startJourneyButton}>
                <div className={classesStartJourneyButton.firstBorder} />
                <div className={classesStartJourneyButton.firstLine} />
                <p>Начать путешествие</p>
                <div className={classesStartJourneyButton.secondBorder} />
                <div className={classesStartJourneyButton.secondLine} />
              </div>

              <div className={classesStartJourney.arrowHorizontal}></div>
              <div className={classesStartJourney.arrowAngle}></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
