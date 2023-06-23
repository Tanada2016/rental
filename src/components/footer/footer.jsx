import React from "react";
import "./footer.scss";
import "../header/header.scss";
import Logo from "../logo/logo";
const Footer = () => {
  return (
    <div className="footer header">
      <Logo />
      <div className="contacts">
        <span>Контакты:</span>
        <a className="link" href="tel:+77777777">
          +7(777)-77-77
        </a>
        <a className="link" href="mailto:Bicyclerentalservice@mail.ru">
          Bikerenservice@mail.ru
        </a>
      </div>
    </div>
  );
};

export default Footer;
