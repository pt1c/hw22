import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import MainPage from '../../pages/main-page';
import HistoryRouter from '../history-router/history-router';
import browserHistory from '../../browser-history';
import NotFoundPage from '../../pages/not-found-page';
import AboutPage from '../../pages/about-page';

function App(): JSX.Element {
  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={AppRoute.Root} element={<MainPage />} />
        <Route path={AppRoute.About} element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />}/>
      </Routes>
    </HistoryRouter>
  );
}

export default App;
