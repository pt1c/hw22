import Footer from '../components/footer/footer';
import Header from '../components/header/header';

export default function AboutPage(): JSX.Element {
  return (
    <>
      <Header />

      <main className="page-body__page-main">
        <section className="page-body__container">
          <h2 className="visually-hidden">Информация</h2>

          <p className="main-events__msg">Информация о сборке</p>
        </section>
      </main>

      <Footer />
    </>
  );
}
