import { Link } from 'react-router-dom';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';

export default function NotFoundPage(): JSX.Element {
  return (
    <div className="user-page">
      <Header />

      <section className="page-body__container">
        <h2 className="visually-hidden">Информация</h2>

        <p className="main-events__msg">404.<br />Ooopsie. Page Not Found.</p>
        <Link to="/" className='user-block__link'>Go to main page</Link>
      </section>

      <Footer />
    </div>
  );
}
