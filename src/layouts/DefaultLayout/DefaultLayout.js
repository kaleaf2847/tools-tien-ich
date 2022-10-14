import PropTypes from 'prop-types';
import { Footer, Header } from '@components';

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
