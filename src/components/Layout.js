import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast";
import './procar.css'
const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Navbar />
      <main style={{ minHeight: "70vh" }}>
        <Toaster />
        <img className="im" src="https://cdn-prod.dairyaustralia.com.au/-/media/project/dairy-australia-sites/national-home/promo-components-images/i/industry-statistics-header-banner.jpg?h=382&w=680&rev=c9536bfc8bc04aada6af29718c25aac9&hash=F3368FECDA1DBDE5B37C979569EFF0AE" alt=".." />
        {children}
      </main>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: "The Statistics Club",
  description: "Statistics Club of IIT-Tirupati. The club manages all the data science, quant and statistics related work.",
  keywords: "IIT-Tirupati, IIT TIRUPATI, IIT-TIRUPATI, STATISTICS CLUB, ADNAN",
  author: "Adnan",
};

export default Layout;