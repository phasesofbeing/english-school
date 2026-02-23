import Header from './Header';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Layout;