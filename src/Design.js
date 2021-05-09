import React from 'react';


const Hero = (props) => {
    
    
    const style = {
      'position': 'fixed',
      'top': 0, 
      'left': 0,
      'min-width': '100%',
      'min-height': '50%'
    }
    
    return(
      <div style={style}>
        <img src={`https://i.imgur.com/lQ6Hgrc.jpg/?image=${props.number}`} style={style}/>
      </div>
    )
  }
  
  const App = () => {
    return(
      <div>
        <Hero name='hero' number={1054} />
      </div>
    )
  }
  

export default Hero;