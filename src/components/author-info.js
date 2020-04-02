import React from 'react';
import './author-info.css';

import {FaRegCheckCircle, MdKeyboardArrowDown} from 'react-icons/all'

const AuthorInfo = ({authorInfo}) => {
    const {authorInfo : {name : authorName, photo :authorPhoto,nickname : authorNickname}} = authorInfo;
    const {date : postDate, content :  postContent } = authorInfo;

    return (
        <div className = "authorInfo">
                <img className = "authorAvatar" src={authorPhoto} alt="error"></img>
                <div className = "postInfo"> 
                    <p>{authorName}  <FaRegCheckCircle/>   {authorNickname} {postDate}  <MdKeyboardArrowDown/></p> 
                       
                    <p>{postContent}</p>
                </div>
        </div>
    )
}

export default AuthorInfo;