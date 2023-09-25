import React, { useState } from 'react';

export default function About() {
  const [myStyle, setMyStyle] = useState({
    color: 'black',
    backgroundColor: 'white',
    border: '1px solid white'
  });
  
  const [btntext, setBtnText] = useState("Enable Dark Mode");
  
  const toggleStyle = () => {
    const newStyle = {
      color: myStyle.color === 'black' ? 'white' : 'black',
      backgroundColor: myStyle.backgroundColor === 'white' ? 'black' : 'white',
      border: '1px solid white'
    };
    
    setMyStyle(newStyle);
    setBtnText(myStyle.color === 'black' ? "Enable Light Mode" : "Enable Dark Mode");
  };
  
  const accordionItemContent = [
    {
      title: "Accordion Item #1",
      body: "This is the first item's accordion body..."
    },
    {
      title: "Accordion Item #2",
      body: "This is the second item's accordion body..."
    },
    {
      title: "Accordion Item #3",
      body: "This is the third item's accordion body..."
    }
  ];

  return (
    <div className="container" style={myStyle}>
      <h1 className='my-2'>About Us</h1>
      <div className="accordion" id="accordionExample" style={myStyle}>
        {accordionItemContent.map((item, index) => (
          <div className="accordion-item" key={index}>
            <h2 className="accordion-header">
              <button className={`accordion-button ${index === 0 ? 'show' : ''}`} style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index + 1}`} aria-expanded={index === 0 ? 'true' : 'false'} aria-controls={`collapse${index + 1}`}>
                {item.title}
              </button>
            </h2>
            <div id={`collapse${index + 1}`} className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`} data-bs-parent="#accordionExample">
              <div className="accordion-body" style={myStyle}>
                <strong>{item.title}</strong> {item.body}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="container my-3">
        <button onClick={toggleStyle} type="button" className="btn btn-primary">{btntext}</button>
      </div>
    </div>
  );
}
