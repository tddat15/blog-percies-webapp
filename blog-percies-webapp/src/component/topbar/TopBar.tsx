import React from "react";
import "./topbar.css";

export default function TopBar() {
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-facebook"></i>
        <i className="topIcon fa-brands fa-twitter"></i>
        <i className="topIcon fa-brands fa-instagram"></i>
        <i className="topIcon fa-brands fa-pinterest"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">HOME</li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">WRITE</li>
          <li className="topListItem">LOGOUT</li>
        </ul>
      </div>
      <div className="topRight">
        <img
          className="topImg"
          src="https://m.media-amazon.com/images/M/MV5BMzIxZjcxZDQtOTM5YS00YzJjLTkzYzYtMTRiM2ViYmQ1ZDBhXkEyXkFqcGdeQXVyNDQxNjcxNQ@@._V1_.jpg"
          alt=""
        />
        <i className="topSearch fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
