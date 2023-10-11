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
<div className='cool-background'>
  
</div>
        <img src="logo-website.png" alt="" style={{width: "400px"}}/>
        <p>Free Frontend tools</p>
        <h1>Elevate your website's visual appeal and interactivity</h1>
        <p>SEPT 20 | 03:00 PM CET | 09:00 AM EDT</p>
        <button>Register</button>
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