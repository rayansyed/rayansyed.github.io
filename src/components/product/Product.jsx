import "./product.css";

import React from 'react';
import HoverVideoPlayer from 'react-hover-video-player';


const Product = ({img,link,title,desc,subheading,date,video,features}) => {


    return (
        <div className="p"> 
                {/* <div className="p-browser">
                    <div className="p-circle"></div>
                    <div className="p-circle"></div>
                    <div className="p-circle"></div>
                </div> */}
            <HoverVideoPlayer
            className="p-videoplayer"
            videoSrc={video}
            pausedOverlay={
                <img
                src={img}
                alt=""
                style={{
                    // Make the image expand to cover the video's dimensions
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                }}
                />
                }
            loadingOverlay={
                <div className="loading-overlay">
                <div className="loading-spinner" />
                </div>
            }
            />
            {/* <a href={"/valuinfo"} target="_blank" rel="noreferrer">
                    <img src={img} alt="" className="p-img" />
            </a> */}
            <div className="p-texts">
                <h4 className="p-title">{title} &#11015;</h4>
                <h4 className="p-subheading">{subheading}</h4>
                <h4 className="p-date">{date}</h4>
                <p className="p-desc">{desc}</p>
                <br></br>
                <h4 className="p-subheading">Highlights</h4>
                <p>{features}</p>
                <a href={link}>View</a>            
            </div>

        </div>
    )
}

export default Product
