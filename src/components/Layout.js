import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast";
import clip from '../static/vid.mp4'
import './procar.css'
const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div className="layout">
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
        
        
        

        <video className="im" autoPlay loop muted id="video">
            <source src={clip} type='video/mp4' />
            hi
            
    </video>

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