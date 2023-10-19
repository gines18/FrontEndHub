import React from 'react'

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
        img: "font-content.png",
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
        <img src="logo-website.png" alt="logo" style={{width: "400px"}}/>
        <div className='content-font'>
        <p className='responsive-font'>Free Frontend tools</p>
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