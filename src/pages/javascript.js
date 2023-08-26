import Header from "../comp/header";
import Footer from "../comp/Footer";
import MainContent from "../comp/MainContent";
import { Helmet } from "react-helmet-async";
import ThemeContextt from "../context/DataContext";
import { useContext } from "react";
import "../theme.css";

const Javascript = () => {
  const {theme}=useContext(ThemeContextt)

  return (
    <div className={`${theme}`}>
      <Helmet>
        <title>JAVASCRIPT Page</title>
        <meta name="description" content="JAVASCRIPTTTTTTTTTTTTTTTTTTTTT" />
        <style type="text/css">{`
   
 
        
    `}</style>
      </Helmet>
      <Header />
     
      <MainContent pageName="JAVASCRIPT Page" />
      <Footer />
    </div>
  );
};

export default Javascript;
