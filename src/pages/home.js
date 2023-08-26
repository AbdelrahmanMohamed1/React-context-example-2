import Header from "../comp/header";
import Footer from "../comp/Footer";
import MainContent from "../comp/MainContent";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import ThemeContextt from "../context/DataContext";
import "../theme.css";

const Home = () => {
  const {theme}=useContext(ThemeContextt)
  return (
    <div className={`${theme}`}>
      <Helmet>
        <title>HOME Page</title>
        <meta name="description" content="HOMEEEEEEEEEEEE" />
      </Helmet>

      <Header />

      <MainContent pageName="HOME Page" />

      <Footer />
    </div>
  );
};

export default Home;
