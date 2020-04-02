import React from 'react';
import './image-content.css';

const ImageContent = ({imageInfo}) => {
    const {image : postImage } = imageInfo;
    return(
        <div className="imageContentDiv"> 
            <img className = "imageContent" src={postImage} alt="error"></img>
        </div>
    )
}

export default ImageContent;