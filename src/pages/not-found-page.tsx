import { Link } from 'react-router-dom';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';

export default function NotFoundPage(): JSX.Element {
  return (
    <>
      <Header />

      <section className="page-body__container">
        <h2 className="visually-hidden">Информация</h2>

        <p className="main-events__msg">
          404.<br />
          Ooopsie. Page Not Found.<br />
          <Link to="/">на главную страницу</Link>
        </p>

      </section>

      <Footer />
    </>
  );
}
