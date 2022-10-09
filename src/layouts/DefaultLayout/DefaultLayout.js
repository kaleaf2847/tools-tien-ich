import PropTypes from 'prop-types';
import { Header } from '@components/Header';
import { Footer } from '@components/Footer';

function DefaultLayout({ children }) {
  return (
    <div id="App">
      <Header />
      <main className="mt-12">{children}</main>
      <Footer />
    </div>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.node,
};

export default DefaultLayout;
