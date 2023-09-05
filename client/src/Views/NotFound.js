import React from 'react';
import './NotFound.css';

function NotFound() {
    
    return (
    <div className="NotFound">
        <h1 className="display-6"> Oops, you got me! </h1>
        <p className="h4" id="h2Subtitle"> This route doesn't exist</p>          
                
        <div className="centering">
          <img className="dancingPanda" src="https://i.pinimg.com/originals/b8/44/51/b844518e4262f54396470be38f183aae.gif"/>
        </div>
    </div>
    );
}

export default NotFound;
