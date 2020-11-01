import React from 'react';
import './Suggestion.css';

export default function Suggestion({img,alt,text,onClick}) {
    return (
        <div className="sg">
            <img 
                src={img}
                alt={alt}
                className="yt__suggestions__vedio"
            />    
            <div className="sg__text">
                <p onClick={onClick} >{text}</p>
            </div>
        </div>
    )
}
