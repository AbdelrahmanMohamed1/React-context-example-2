import Header from "../comp/header";
import Footer from "../comp/Footer";
import MainContent from "../comp/MainContent";
import { Helmet } from "react-helmet-async";
import ThemeContextt from "../context/DataContext";
import { useContext } from "react";
import "../theme.css";

const Html = () => {
  const {theme}=useContext(ThemeContextt)

  return (
    <div className={`${theme}`} >
      <Helmet>
        <title>HTML Page</title>
        <meta name="description" content="HTMLLLLLLLLLLLLLLLL" />
      </Helmet>
      <Header />
      <MainContent pageName="HTML Page" />
      <Footer />
    </div>
  );
};

export default Html;
