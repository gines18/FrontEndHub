import React from 'react'
import Buttons from  './Buttons.jsx';


const content = [
    {
        img: "colors-content.jpeg",
        text: "Colors"
    },
    {
        img: "background-content.jpeg",
        text: "Background"
    },
    {
        img: "font0.png",
        text: "Fonts"
    },
    {
        img: "certificate-content.png",
        text: "Certificates"
    },
    {
        img: "courses-content.png",
        text: "Courses"
    },
    {
        img: "jobs-content.png",
        text: "Jobs"
    },
]

function Content() {
  return (
    <div className='container-content'>
           <div className="menu_left_mobile">
      <Buttons  />
    </div>
        <img src="logo-website.png" alt="logo" style={{width: "400px"}}/>
        <div className='content-font'>
        <p className='responsive-fontHeader'>Free Frontend tools</p>
        <h1 className='responsive-font'>Elevate your website's visual appeal and interactivity</h1>
      </div>
        <div className='img-content'>
            {content.map((item, index) => (
              <div className='img-data' key={index}>
                <img className='img-width' src={item.img} alt="img"/>
                <p>{item.text}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Content