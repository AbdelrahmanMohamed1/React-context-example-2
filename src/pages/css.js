import Header from "../comp/header";
import Footer from "../comp/Footer";
import MainContent from "../comp/MainContent";
import { Helmet } from "react-helmet-async";
import ThemeContextt from "../context/DataContext"
import { useContext } from "react";
import "../theme.css";

const Css = () => {
  const {theme}=useContext(ThemeContextt)
  return (
    <div className={`${theme}`}>
      <Helmet>
        <title>CSS Page</title>
        <meta name="description" content="csssssssssssssssssssss" />
      </Helmet>

      <Header />

      <MainContent pageName="CSS Page" />

      <Footer />
    </div>
  );
};

export default Css;
