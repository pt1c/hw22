/* eslint-disable react/no-array-index-key */
import { useAppSelector } from '../hooks';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import { getIsStationsLoading } from '../store/stations/selectors';
import MainList from '../components/main-list/main-list';
import Loader from '../components/loader/loader';

export default function MainPage(): JSX.Element {
  const isFilmsLoading = useAppSelector(getIsStationsLoading);

  return (
    <>
      <Header />

      { isFilmsLoading ? <Loader /> : <MainList /> }

      <Footer />
    </>
  );
}
