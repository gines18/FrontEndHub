import React from "react";
import "./Styles.css";
import moment from "moment";

function Footer() {
  return (
    <div id="container-footer">
      <div>
        Up to date:{" "}
        <span className="date">{moment().format("MMMM Do, YYYY")}</span>
      </div>
      <a href="https://github.com/gines18/" target="_blank">
        Github
      </a>
    </div>
  );
}

export default Footer;
