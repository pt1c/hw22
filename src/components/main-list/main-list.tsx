/* eslint-disable react/no-array-index-key */
import { useAppSelector } from '../../hooks';
import { getStations } from '../../store/stations/selectors';

export default function MainList(): JSX.Element {
  const stations = useAppSelector(getStations);

  return (
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
                  <select className="event__input" name="arrival">
                    {stations.map((station, i) => <option key={`st${i}`} value={station.station_id}>{station.station_id}</option>)}
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
                  <select className="event__input" name="destination">
                    {stations.map((station, i) => <option key={`st${i}`} value={station.station_id}>{station.station_id}</option>)}
                  </select>
                </div>
              </section>
            </li>

          </ul>
        </form>

      </section>
    </main>
  );
}
