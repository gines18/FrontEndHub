import React from "react";


function Box() {


  return (
    <>
      <div className="gallery">
        <div className="left">
          <div className="detailswrapper">
            <div className="details">
              <h1>Colors</h1>
            </div>
            <div className="details">
              <h1>Fonts</h1>
            </div>
            <div className="details">
              <h1>Background</h1>
            </div>
          </div>
        </div>
        <div className="right">

          <div >
            <img className="photos" src="./design.jpeg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Box;
