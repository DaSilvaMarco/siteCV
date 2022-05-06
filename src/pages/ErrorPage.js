import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const ErrorPage = () => {
  return (
    <div>
      <Header />
      <div className="errorpage-pres flex-center align-center">
        <div>
          <h1 className="error-title">Désolé, page inexistante !</h1>
          <img
            src="./img/profile.png"
            alt="profile marco da silva"
            className="img-resp"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ErrorPage;
