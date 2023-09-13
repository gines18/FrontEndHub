import React, {useEffect, useState} from "react";


function Popup() {
    const [showBox, setShowBox] = useState(false);
  
    useEffect(() => {
      const showTimeout = setTimeout(() => {
        setShowBox(true);
      }, 3000);
  
      const hideTimeout = setTimeout(() => {
        setShowBox(false);
      }, 6000);
  
      return () => {
        clearTimeout(showTimeout);
        clearTimeout(hideTimeout);
      };
    }, []);
  
    return (
      <div className="popup-container">
        {showBox && (
          <div id="box-popup">
            <p>Enjoy browsing!</p>
          </div>
        )}
      </div>
    );
  }
  
  export default Popup;