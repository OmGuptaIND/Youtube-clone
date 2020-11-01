import React from 'react';
import './Active.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function Active({vedio,alt,title,description}) {
    console.log("vedio >>>>>> ",vedio);
    const vedio_src= `https://www.youtube.com/embed/${vedio}?autoplay=1&fs=0&modestbranding=1`
    return (
        <div className="atv" >
            <div className="yt__active">
                <iframe id="ytplayer" type="text/html" width="750" height="360"
                    id="ytplayer" type="text/html"
                    src={vedio_src}
                    frameborder="0" 
                    className="yt__active__vedio"    
                />
                
                <h2 className="yt__name">{title}</h2>
                <small className="align__left number ">854612 <small className="yt__view" >views</small></small>
                <hr
                    className="yt__active__hr"
                />
                <div className="yt__active__description">
                    <p className="yt__dsc">{description}</p>
                </div>
            </div>
            <div className="yt__bottom__margin"></div>
        </div>
    )
}
// {res?.snippet?.title}
// {res?.snippet?.description}