import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Menu() {
  function scrollToComponent() {
    const targetComponent = document.querySelector(".menu_left");

    if (targetComponent) {
      targetComponent.scrollIntoView({ behavior: "smooth" });
    }
  }

  function showMenu() {
    const menu = document.getElementsByClassName('menu_left_mobile')[0]; // Select the first element with class 'menu_left'
    if (menu) {
      menu.style.display = "block"; // Show the menu
    }
  }

  return (

      <nav className="container-fluid fixed-top d-flex justify-content-end mt-2 mb-4 pe-6">
   <button
  onClick={() => {
    if (window.innerWidth > 390) {
      scrollToComponent();
    } else {
      showMenu();
    }
  }}
  type="button"
  className="btn btn-danger"
>
  Menu
</button>
      </nav>
    
  );
}

export default Menu;
