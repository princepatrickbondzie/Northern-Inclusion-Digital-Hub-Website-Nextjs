import "../styles/globals.css";
import "../styles/Home.css";
import Navigation from "../components/Navigation/index";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
