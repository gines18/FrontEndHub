import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';



function Menu() {

  function scrollToComponent() {
    const targetComponent = document.getElementById("button-container");
    if (targetComponent) {
      targetComponent.scrollIntoView({ behavior: "smooth" });
    }
  }

  
  return (
    <nav className='container-fluid fixed-top d-flex justify-content-end mt-2 mb-4 pe-4'>
       <button onClick={scrollToComponent} type="button" className="btn btn-danger">Menu</button>
       </nav>
   
  )
}

export default Menu