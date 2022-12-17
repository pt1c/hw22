import Footer from '../components/footer/footer';
import Header from '../components/header/header';

export default function MainPage(): JSX.Element {
  return (
    <>
      <Header />

      <main className="page-body__page-main">
        <section className="page-body__container">
          <h2 className="visually-hidden">Результат расчета</h2>

          <form className="event event--edit" action="#" method="post">
            <ul className="trip-events__list">

              <li className="trip-events__item">
                <section className="event__header">
                  <div className="event__type-wrapper">
                    <img className="event__type-icon" width="17" height="17" src="img/train-station.png" alt="Event type icon" />
                  </div>

                  <div className="event__field-group">
                    <label className="event__label" htmlFor="event-destination-1">Станция отправления</label>
                    <select className="event__input">
                      <option value="123">123</option>
                      <option value="234">234</option>
                      <option value="345">345</option>
                      <option value="456">456</option>
                    </select>
                  </div>
                </section>
              </li>
              <li className="trip-events__item">
                <section className="event__header">
                  <div className="event__type-wrapper">
                    <img className="event__type-icon" width="30" height="30" src="img/train-station.png" alt="Event type icon" />
                  </div>

                  <div className="event__field-group">
                    <label className="event__label" htmlFor="event-destination-1">Станция прибытия</label>
                    <select className="event__input">
                      <option value="123">123</option>
                      <option value="234">234</option>
                      <option value="345">345</option>
                      <option value="456">456</option>
                    </select>
                  </div>
                </section>
              </li>

            </ul>
          </form>

        </section>
      </main>

      <Footer />
    </>
  );
}
